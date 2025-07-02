import { LitElement, html, css } from 'lit';

export class MotorcycleWeatherCardEditor extends LitElement {
  static get properties() {
    return { hass: { type: Object }, _config: { type: Object } };
  }

  setConfig(config) {
    console.log('Editor setConfig called with:', config);
    this._config = {
      home_location: {
        name: '',
        latitude: 0,
        longitude: 0,
      },
      work_location: {
        name: '',
        latitude: 0,
        longitude: 0,
      },
      temperature_threshold: 15,
      rain_threshold: 20,
      travel_start_hour: 7,
      travel_end_hour: 19,
      ...config,
    };
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this._config[`${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined && target.checked !== null
            ? target.checked
            : target.value,
        };
      }
    }
    this.dispatchEvent(
      new CustomEvent('config-changed', { detail: { config: this._config } })
    );
  }

  _locationChanged(ev, locationType, field) {
    const value = ev.target.value;
    this._config = {
      ...this._config,
      [`${locationType}_location`]: {
        ...this._config[`${locationType}_location`],
        [field]: field === 'name' ? value : parseFloat(value),
      },
    };
    this.dispatchEvent(
      new CustomEvent('config-changed', { detail: { config: this._config } })
    );
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const { home_location, work_location, temperature_threshold, rain_threshold, travel_start_hour, travel_end_hour } = this._config;

    return html`
      <div class="card-config">
        <h3>Home Location</h3>
        <ha-textfield
          label="Name"
          .value="${home_location?.name || ''}"
          @change="${(ev) => this._locationChanged(ev, 'home', 'name')}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${home_location?.latitude || ''}"
          .configValue="home_location.latitude"
          @change="${(ev) => this._locationChanged(ev, 'home', 'latitude')}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: -90, max: 90, step: 0.0001 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${home_location?.longitude || ''}"
          .configValue="home_location.longitude"
          @change="${(ev) => this._locationChanged(ev, 'home', 'longitude')}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: -180, max: 180, step: 0.0001 } }}"
        ></ha-selector-number>

        <h3>Work Location</h3>
        <ha-textfield
          label="Name"
          .value="${work_location?.name || ''}"
          @change="${(ev) => this._locationChanged(ev, 'work', 'name')}"
        ></ha-textfield>
        <ha-selector-number
          label="Latitude"
          .value="${work_location?.latitude || ''}"
          .configValue="work_location.latitude"
          @change="${(ev) => this._locationChanged(ev, 'work', 'latitude')}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: -90, max: 90, step: 0.0001 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Longitude"
          .value="${work_location?.longitude || ''}"
          .configValue="work_location.longitude"
          @change="${(ev) => this._locationChanged(ev, 'work', 'longitude')}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: -180, max: 180, step: 0.0001 } }}"
        ></ha-selector-number>

        <h3>Criteria</h3>
        <ha-selector-number
          label="Minimum Temperature (°C)"
          .value="${temperature_threshold || 15}"
          .configValue="temperature_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: -20, max: 40, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Maximum Rain Probability (%)"
          .value="${rain_threshold || 20}"
          .configValue="rain_threshold"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: 0, max: 100, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel Start Hour (0-23)"
          .value="${travel_start_hour || 7}"
          .configValue="travel_start_hour"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: 0, max: 23, step: 1 } }}"
        ></ha-selector-number>
        <ha-selector-number
          label="Travel End Hour (0-23)"
          .value="${travel_end_hour || 19}"
          .configValue="travel_end_hour"
          @change="${this._valueChanged}"
          .hass="${this.hass}"
          .selector="${{ number: { mode: 'box', min: 0, max: 23, step: 1 } }}"
        ></ha-selector-number>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 16px;
      }
      h3 {
        margin-bottom: 0;
      }
      ha-textfield,
      ha-selector-number {
        width: 100%;
      }
    `;
  }
}

customElements.define('motorcycle-weather-card-editor', MotorcycleWeatherCardEditor);