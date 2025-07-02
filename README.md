# Motorcycle Weather Card

A Lovelace card for Home Assistant that shows a 7-day forecast and determines if it's a good day to ride your motorcycle to work.

## Features

*   **7-Day Forecast:** See the weather outlook for the entire week.
*   **Go/No-Go Indicator:** A clear icon (✅/❌) tells you if the weather is suitable for riding.
*   **Configurable Locations:** Set your home and work locations in the card configuration.
*   **Customizable Criteria:** The card checks for temperature and rain probability during your commuting hours.
*   **Visual Configuration Editor:** Easily configure the card directly from the Home Assistant UI.

## Installation

1.  **Add as a custom repository in HACS:**
    *   Go to HACS > Frontend > three dots in the top right > Custom repositories.
    *   Add the URL to this GitHub repository.
    *   Select **Dashboard** as the category.
    *   Click "Add".
2.  **Install the card:**
    *   The "Motorcycle Weather Card" should now be visible in the HACS frontend section.
    *   Click on it and then click "Install". HACS will ask you to add the resource to your Lovelace dashboards.
    *   **Important:** If you have a previous version installed, please remove it from HACS first and then reinstall it.
3.  **Add to your Lovelace dashboard:**
    *   Go to your dashboard, click the three dots, and select "Edit Dashboard".
    *   Click the "+" button to add a new card.
    *   Search for "Motorcycle Weather Card".
    *   Configure the card using the visual editor or YAML as described below.

## Troubleshooting

If you encounter issues like the card not appearing in the "Add Card" picker, or the visual editor not being available, try the following steps in order:

1.  **Force Refresh:** Press `Ctrl + F5` (Windows/Linux) or `Cmd + Shift + R` (Mac) to force a hard refresh of your browser. This bypasses the browser cache.
2.  **Clear Home Assistant Frontend Cache:** In Home Assistant, go to **Developer Tools > Services**, search for "frontend.reload_themes", and call the service. This can sometimes help with resource loading.
3.  **Restart Home Assistant:** A full restart of the Home Assistant server ensures all components and resources are reloaded.
4.  **Check Lovelace Resources:** HACS should automatically add the card to your Lovelace resources. You can check this by navigating to **Settings > Dashboards** in Home Assistant, clicking the three-dots menu in the top right, and selecting **Resources**. You should see an entry with a URL like `/hacsfiles/motorcycle-weather-card/motorcycle-weather-card.js`.
    *   If this entry is missing, you can add it manually by clicking **Add Resource**, entering the URL, and selecting **JavaScript Module** as the resource type.

## Configuration

The Motorcycle Weather Card can be configured using the visual editor in Home Assistant or directly via YAML.

### Visual Editor

After adding the card to your dashboard, click "Show Code Editor" (if in YAML mode) or the "Edit" icon (if in UI mode) and then select the "Motorcycle Weather Card". You will see fields to configure:

*   **Home Location:** Name, Latitude, Longitude
*   **Work Location:** Name, Latitude, Longitude
*   **Minimum Temperature (°C):** The lowest acceptable temperature for riding.
*   **Maximum Rain Probability (%):** The highest acceptable probability of rain for riding.
*   **Travel Start Hour (0-23):** The beginning of your commuting window.
*   **Travel End Hour (0-23):** The end of your commuting window.

### YAML Configuration

```yaml
type: custom:motorcycle-weather-card
home_location:
  name: Stellendam
  latitude: 51.77
  longitude: 4.04
work_location:
  name: Middelharnis
  latitude: 51.75
  longitude: 4.17
temperature_threshold: 15
rain_threshold: 20
travel_start_hour: 7
travel_end_hour: 19
```

## Travel Criteria

The card will show a "go" icon (✅) if the following conditions are met for the entire travel period (configured start to end hour) for *both* your home and work locations:

*   **Temperature:** Stays above the configured minimum temperature.
*   **Precipitation:** The probability of rain is below the configured maximum rain probability.

If either of these conditions is not met for either location, the card will show a "no-go" icon (❌).
