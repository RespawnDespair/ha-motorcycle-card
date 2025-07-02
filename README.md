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
    *   Select "Lovelace" as the category.
    *   Click "Add".
2.  **Install the card:**
    *   The "Motorcycle Weather Card" should now be visible in the HACS frontend section.
    *   Click on it and then click "Install".
3.  **Add to your Lovelace dashboard:**
    *   Go to your dashboard, click the three dots, and select "Edit Dashboard".
    *   Click the "+" button to add a new card.
    *   Search for "Motorcycle Weather Card".
    *   Configure the card as described below.

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