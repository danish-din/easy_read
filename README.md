# Easy Read Mode

[![hacs badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)

A Home Assistant custom integration to make dashboards instantly more readable for everyone. Just add `?easyread=2` (or any zoom factor) to your URL—no setup, no configuration, no themes required!

## Features
- Instantly zoom your dashboard with a URL parameter: `?easyread=2` for 2x zoom, `?easyread=1.5` for 1.5x, etc.
- No configuration or theme setup required
- Works out of the box, like Kiosk Mode
- Great for accessibility, presentations, and public displays

## Installation

### HACS (Recommended)
1. Go to HACS → Integrations → Custom Repositories
2. Add this repository: `https://github.com/danish-din/easy_read` as an **Integration**
3. Search for and install **Easy Read Mode**

### Manual
1. Copy the `easy_read_mode` folder to `custom_components/` in your Home Assistant config directory.

## Setup

### 1. Register the JS file as a Lovelace resource
Add this to your `configuration.yaml` or via the UI (Settings → Dashboards → Resources):

```yaml
lovelace:
  resources:
    - url: /custom_components/easy_read_mode/easy_read.js
      type: module
```

## Usage
- To zoom your dashboard, simply add `?easyread=2` (or any number) to your URL:
  - Example: `https://your-ha:8123/lovelace/default_view?easyread=2`
- Remove the parameter or set `?easyread=1` to return to normal view.

## Requirements
- None! No themes, no browser_mod, no configuration—just install and use.

## Support
For issues, open an issue on [GitHub](https://github.com/danish-din/easy_read).
