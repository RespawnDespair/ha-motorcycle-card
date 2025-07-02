# Motorcycle Weather Card

A Lovelace card for Home Assistant that shows a 7-day forecast and determines if it's a good day to ride your motorcycle to work.

## Features

*   **7-Day Forecast:** See the weather outlook for the entire week.
*   **Go/No-Go Indicator:** A clear icon (✅/❌) tells you if the weather is suitable for riding.
*   **Configurable Locations:** Set your home and work locations in the card configuration.
*   **Customizable Criteria:** The card checks for temperature and rain probability during your commuting hours.

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
    *   Configure the card as described below.

## Troubleshooting

If you see the error `Custom element not found: motorcycle-weather-card`, try the following steps in order:

1.  **Force Refresh:** Press `Ctrl + F5` or `Cmd + Shift + R` to force a hard refresh of your browser.
2.  **Clear Cache:** Clear your browser's cache and cookies.
3.  **Restart Home Assistant:** A full restart of the Home Assistant server can often resolve loading issues.
4.  **Check Lovelace Resources:** HACS should automatically add the card to your Lovelace resources. You can check this by navigating to **Settings > Dashboards** in Home Assistant, clicking the three-dots menu in the top right, and selecting **Resources**. You should see an entry with a URL like `/hacsfiles/motorcycle-weather-card/motorcycle-weather-card.js`.
    *   If this entry is missing, you can add it manually by clicking **Add Resource**, entering the URL, and selecting **JavaScript Module** as the resource type.

## Configuration

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
```

## Travel Criteria

The card will show a "go" icon (✅) if the following conditions are met for the entire travel period (07:00 - 19:00):

*   **Temperature:** Stays above 15°C.
*   **Precipitation:** The probability of rain is less than 20%.

If either of these conditions is not met, the card will show a "no-go" icon (❌) and the reason.
