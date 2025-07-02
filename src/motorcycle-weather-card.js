import { LitElement, html, css } from 'lit';

// Import the editor
import './motorcycle-weather-card-editor.js';

export class MotorcycleWeatherCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      weather: { state: true },
    };
  }

  setConfig(config) {
    this.config = {
      home_location: {
        name: 'Stellendam',
        latitude: 51.77,
        longitude: 4.04,
      },
      work_location: {
        name: 'Middelharnis',
        latitude: 51.75,
        longitude: 4.17,
      },
      temperature_threshold: 15,
      rain_threshold: 20,
      travel_start_hour: 7,
      travel_end_hour: 19,
      ...config,
    };
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.weather) {
      this.fetchWeather();
    }
  }

  async fetchWeather() {
    const home = this.config.home_location;
    const work = this.config.work_location;

    const homeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${home.latitude}&longitude=${home.longitude}&hourly=temperature_2m,precipitation_probability&daily=weathercode,temperature_2m_max`;
    const workUrl = `https://api.open-meteo.com/v1/forecast?latitude=${work.latitude}&longitude=${work.longitude}&hourly=temperature_2m,precipitation_probability`;

    try {
      const [homeResponse, workResponse] = await Promise.all([
        fetch(homeUrl),
        fetch(workUrl),
      ]);

      const homeData = await homeResponse.json();
      const workData = await workResponse.json();

      this.weather = this.evaluateWeather(homeData, workData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  evaluateWeather(homeData, workData) {
    const dailyWeather = [];
    const { temperature_threshold, rain_threshold, travel_start_hour, travel_end_hour } = this.config;

    for (let i = 0; i < 7; i++) {
      const day = {
        date: new Date(),
        weatherIcon: this.getWeatherIcon(homeData.daily.weathercode[i]),
        maxTemp: homeData.daily.temperature_2m_max[i],
        canRide: true,
        reason: '',
      };
      day.date.setDate(day.date.getDate() + i);

      const travelHours = [];
      for (let h = travel_start_hour; h <= travel_end_hour; h++) {
        travelHours.push(h);
      }

      let homeGo = true;
      let workGo = true;

      for (const location of ['home', 'work']) {
        const data = location === 'home' ? homeData : workData;
        for (const hour of travelHours) {
          const index = i * 24 + hour;
          const temp = data.hourly.temperature_2m[index];
          const rain = data.hourly.precipitation_probability[index];

          if (temp <= temperature_threshold) {
            if (location === 'home') homeGo = false;
            else workGo = false;
            break;
          }
          if (rain > rain_threshold) {
            if (location === 'home') homeGo = false;
            else workGo = false;
            break;
          }
        }
      }

      if (!homeGo || !workGo) {
        day.canRide = false;
        day.reason = 'Conditions not met'; // Simplified reason for combined view
      }

      dailyWeather.push(day);
    }
    return dailyWeather;
  }

  getWeatherIcon(wmoCode) {
    const iconMap = {
      0: 'mdi:weather-sunny',
      1: 'mdi:weather-partly-cloudy',
      2: 'mdi:weather-cloudy',
      3: 'mdi:weather-cloudy',
      45: 'mdi:weather-fog',
      48: 'mdi:weather-fog',
      51: 'mdi:weather-rainy',
      53: 'mdi:weather-rainy',
      55: 'mdi:weather-rainy',
      61: 'mdi:weather-pouring',
      63: 'mdi:weather-pouring',
      65: 'mdi:weather-pouring',
      80: 'mdi:weather-pouring',
      81: 'mdi:weather-pouring',
      82: 'mdi:weather-pouring',
      95: 'mdi:weather-lightning-rainy',
      96: 'mdi:weather-lightning-rainy',
      99: 'mdi:weather-lightning-rainy',
    };
    return iconMap[wmoCode] || 'mdi:weather-sunny';
  }

  render() {
    if (!this.weather) {
      return html`<ha-card header="Motorcycle Weather"><div class="card-content"><p>Loading weather...</p></div></ha-card>`;
    }

    return html`
      <ha-card header="Motorcycle Weather">
        <div class="card-content">
          <div class="calendar">
            ${this.weather.map((day) => html`
              <div class="day">
                <div class="date">${day.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                <div class="icon-container">
                    <ha-icon icon="${day.weatherIcon}"></ha-icon>
                </div>
                <div class="temp">${Math.round(day.maxTemp)}°C</div>
                <div class="rideable-status">
                  <span class="icon">${day.canRide ? '✅' : '❌'}</span>
                </div>
              </div>
            `)}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
      }
      .day {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 8px;
        border-radius: 8px;
        background-color: var(--ha-card-background, var(--card-background-color, white));
        box-shadow: var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12));
      }
      .date {
        font-weight: bold;
        margin-bottom: 4px;
        font-size: 0.9em;
      }
      .icon-container {
        margin-bottom: 4px;
      }
      ha-icon {
        --mdc-icon-size: 32px;
      }
      .temp {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 4px;
      }
      .rideable-status .icon {
        font-size: 24px;
      }

      @media (max-width: 600px) {
        .calendar {
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
      }
    `;
  }

  static getConfigElement() {
    return document.createElement('motorcycle-weather-card-editor');
  }

  static getStubConfig() {
    return {
      home_location: {
        name: 'Stellendam',
        latitude: 51.77,
        longitude: 4.04,
      },
      work_location: {
        name: 'Middelharnis',
        latitude: 51.75,
        longitude: 4.17,
      },
      temperature_threshold: 15,
      rain_threshold: 20,
      travel_start_hour: 7,
      travel_end_hour: 19,
    };
  }
}

customElements.define('motorcycle-weather-card', MotorcycleWeatherCard);