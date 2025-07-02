import { LitElement, html, css } from 'lit';

class MotorcycleWeatherCard extends LitElement {
  static get properties() {
    return {
      _hass: { state: true },
      _config: { state: true },
      weather: { state: true },
    };
  }

  setConfig(config) {
    this._config = {
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
    const home = this._config.home_location;
    const work = this._config.work_location;

    const homeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${home.latitude}&longitude=${home.longitude}&hourly=temperature_2m,precipitation_probability&daily=weathercode`;
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
    for (let i = 0; i < 7; i++) {
      const day = {
        date: new Date(),
        weatherIcon: this.getWeatherIcon(homeData.daily.weathercode[i]),
        home: { go: true, reason: '' },
        work: { go: true, reason: '' },
      };
      day.date.setDate(day.date.getDate() + i);

      const travelHours = Array.from({ length: 13 }, (_, j) => j + 7);

      for (const location of ['home', 'work']) {
        const data = location === 'home' ? homeData : workData;
        for (const hour of travelHours) {
          const index = i * 24 + hour;
          const temp = data.hourly.temperature_2m[index];
          const rain = data.hourly.precipitation_probability[index];

          if (temp <= 15) {
            day[location].go = false;
            day[location].reason = 'Too cold';
            break;
          }
          if (rain > 20) {
            day[location].go = false;
            day[location].reason = 'Rain';
            break;
          }
        }
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
            <div class="day-labels">
              <div class="label"></div>
              <div class="label"></div>
              <div class="label">${this._config.home_location.name}</div>
              <div class="label">${this._config.work_location.name}</div>
            </div>
            ${this.weather.map((day, index) => html`
              <div class="day">
                <div class="date">${day.date.toLocaleDateString(undefined, { weekday: 'short' })}</div>
                <div class="icon-container">
                    <ha-icon icon="${day.weatherIcon}"></ha-icon>
                </div>
                <div class="location">
                  ${index === 0 ? html`<span>Home</span>` : html``}
                  <span class="icon">${day.home.go ? '✅' : '❌'}</span>
                </div>
                <div class="location">
                  ${index === 0 ? html`<span>Work</span>` : html``}
                  <span class="icon">${day.work.go ? '✅' : '❌'}</span>
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
        grid-template-columns: 0.5fr repeat(7, 1fr);
        gap: 8px;
      }
      .day-labels {
        display: contents;
      }
      .day-labels .label {
        font-weight: bold;
        text-align: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--primary-text-color);
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
        margin-bottom: 8px;
      }
      .icon-container {
        margin-bottom: 8px;
      }
      ha-icon {
        --mdc-icon-size: 32px;
      }
      .location {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 4px;
      }
      .location span {
        font-size: 12px;
      }
      .icon {
        font-size: 18px;
      }

      @media (max-width: 600px) {
        .calendar {
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }
      }
    `;
  }
}

customElements.define('motorcycle-weather-card', MotorcycleWeatherCard);