
# Motorcycle Weather Card

A Lovelace card for Home Assistant that shows the 7-day weather forecast and tells you if it's a good day to ride your motorcycle.

## Installation

1.  **Add as a custom repository in HACS:**
    *   Go to HACS > Frontend > three dots in the top right > Custom repositories.
    *   Add the URL to your GitHub repository.
    *   Select "Lovelace" as the category.
    *   Click "Add".
2.  **Install the card:**
    *   The "Motorcycle Weather Card" should now be visible in the HACS frontend section.
    *   Click on it and then click "Install".
3.  **Add to your Lovelace dashboard:**
    *   Go to your dashboard, click the three dots, and select "Edit Dashboard".
    *   Click the "+" button to add a new card.
    *   Search for "Motorcycle Weather Card".
    *   Configure the card with your latitude and longitude.

## Configuration

```yaml
- type: custom:motorcycle-weather-card
  latitude: 51.82
  longitude: 4.04
```

Replace the latitude and longitude with your location.
