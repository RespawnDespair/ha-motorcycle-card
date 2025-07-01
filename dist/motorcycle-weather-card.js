
class MotorcycleWeatherCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    if (!config.latitude || !config.longitude) {
      throw new Error('You need to define latitude and longitude');
    }
    this._config = config;
    this.fetchWeather();
  }

  fetchWeather() {
    const lat = this._config.latitude;
    const lon = this._config.longitude;
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.render(data))
      .catch(error => this.renderError(error));
  }

  render(data) {
    const forecastHtml = this.generateForecastHtml(data);
    const style = this.getStyle();

    this.shadowRoot.innerHTML = `
      <style>${style}</style>
      <ha-card header="Motorcycle Weather">
        <div class="card-content">
          ${forecastHtml}
        </div>
      </ha-card>
    `;
  }

  renderError(error) {
    this.shadowRoot.innerHTML = `
      <ha-card header="Motorcycle Weather">
        <div class="card-content">
          <p>Error fetching weather data: ${error.message}</p>
        </div>
      </ha-card>
    `;
  }

  generateForecastHtml(data) {
    let forecastHtml = '<div class="forecast-container">';

    for (let i = 0; i < 7; i++) {
      const dayData = {
        date: new Date(data.daily.time[i]),
        maxTemp: data.daily.temperature_2m_max[i],
        minTemp: data.daily.temperature_2m_min[i],
        weatherCode: data.daily.weathercode[i],
        hourlyTemp: data.hourly.temperature_2m.slice(i * 24, (i + 1) * 24),
        hourlyPrecipitation: data.hourly.precipitation_probability.slice(i * 24, (i + 1) * 24)
      };

      const recommendation = this.getMotorcycleRecommendation(dayData);

      forecastHtml += `
        <div class="day-card">
          <h2>${dayData.date.toLocaleDateString('en-US', { weekday: 'short' })}</h2>
          <p>${dayData.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
          <div class="icon">${this.getWeatherIcon(dayData.weatherCode)}</div>
          <p><strong>High:</strong> ${Math.round(dayData.maxTemp)}°C</p>
          <p><strong>Low:</strong> ${Math.round(dayData.minTemp)}°C</p>
          <p class="recommendation ${recommendation.class}">${recommendation.text}</p>
        </div>
      `;
    }

    forecastHtml += '</div>';
    return forecastHtml;
  }

  getMotorcycleRecommendation(dayData) {
    const startHour = 7;
    const endHour = 19;
    let canRide = true;

    for (let hour = startHour; hour < endHour; hour++) {
      if (dayData.hourlyTemp[hour] < 15 || dayData.hourlyPrecipitation[hour] > 20) {
        canRide = false;
        break;
      }
    }
    return { text: canRide ? 'Yes' : 'No', class: canRide ? 'yes' : 'no' };
  }

  getWeatherIcon(code) {
    if (code <= 1) return '☀️';
    if (code <= 3) return '⛅️';
    if (code <= 48) return '☁️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 99) return '⛈️';
    return '❓';
  }

  getStyle() {
    return `
      .forecast-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 10px;
      }
      .day-card {
        background-color: var(--ha-card-background, var(--card-background-color, #1e1e1e));
        border-radius: var(--ha-card-border-radius, 10px);
        padding: 10px;
        text-align: center;
      }
      .icon { font-size: 2em; }
      .recommendation { font-weight: bold; }
      .yes { color: #4CAF50; }
      .no { color: #F44336; }
    `;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define('motorcycle-weather-card', MotorcycleWeatherCard);
