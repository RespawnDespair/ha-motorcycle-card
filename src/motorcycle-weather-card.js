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

    const homeUrl = `https://api.open-meteo.com/v1/forecast?latitude=${home.latitude}&longitude=${home.longitude}&hourly=temperature_2m,precipitation_probability`;
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
                <div class="locations">
                  <div class="location">
                    <span>${this._config.home_location.name}</span>
                    <span class="icon">${day.home.go ? '✅' : '❌'}</span>
                    <span class="reason">${day.home.reason}</span>
                  </div>
                  <div class="location">
                    <span>${this._config.work_location.name}</span>
                    <span class="icon">${day.work.go ? '✅' : '❌'}</span>
                    <span class="reason">${day.work.reason}</span>
                  </div>
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
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .day {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--primary-text-color);
        border-radius: 8px;
        padding: 8px;
      }
      .date {
        font-weight: bold;
        text-align: center;
        margin-bottom: 8px;
      }
      .locations {
        display: flex;
        justify-content: space-around;
      }
      .location {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }
      .icon {
        font-size: 24px;
      }
      .reason {
        font-size: 12px;
      }
    `;
  }
}

customElements.define('motorcycle-weather-card', MotorcycleWeatherCard);