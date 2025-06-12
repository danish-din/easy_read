# Easy Read Mode

[![hacs badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)

A Home Assistant custom integration to enable an accessible, high-contrast, large-font theme for Lovelace dashboards using a simple URL parameter and [browser_mod](https://github.com/thomasloven/hass-browser_mod).

## Features
- Toggle easy-read mode with `?easyread=1` in the URL
- Automatically applies the `easyread` theme for the current browser session
- Reverts to the default theme with `?easyread=0` or by removing the parameter
- Requires [browser_mod](https://github.com/thomasloven/hass-browser_mod)

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

### 2. Create the `easyread` theme
Example `themes/easyread.yaml`:

```yaml
easyread:
  primary-color: "#222222"
  accent-color: "#FFD600"
  background-color: "#FFFFFF"
  text-primary-color: "#111111"
  text-medium-light-color: "#222222"
  card-background-color: "#F9F9F9"
  paper-card-header-color: "#111111"
  paper-item-icon-color: "#222222"
  paper-listbox-color: "#111111"
  paper-toggle-button-checked-bar-color: "#FFD600"
  paper-toggle-button-checked-button-color: "#FFD600"
  paper-toggle-button-checked-ink-color: "#FFD600"
  ha-card-border-radius: "12px"
  font-size: "20px"
  paper-font-body1_-_font-size: "20px"
  paper-font-body2_-_font-size: "22px"
  paper-font-subhead_-_font-size: "24px"
  paper-font-headline_-_font-size: "28px"
  paper-font-title_-_font-size: "32px"
```

Include your theme in `configuration.yaml`:

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

### 3. Usage
- To enable Easy Read mode:  
  Visit your dashboard with `?easyread=1` in the URL (e.g., `https://your-ha:8123/lovelace/default_view?easyread=1`)
- To disable:  
  Use `?easyread=0` or remove the parameter.

## Requirements
- [browser_mod](https://github.com/thomasloven/hass-browser_mod) must be installed and loaded

## Support
For issues, open an issue on [GitHub](https://github.com/danish-din/easy_read).
