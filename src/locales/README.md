# Internationalization (i18n) Structure

This directory contains translation files for the iWORKZ v2a Platform.

## Supported Languages (Future)

- **en.json** - English (Default)
- **ja.json** - Japanese (日本語) - *Coming Soon*
- **ko.json** - Korean (한국어) - *Coming Soon*
- **zh.json** - Chinese (中文) - *Coming Soon*
- **tl.json** - Tagalog - *Coming Soon*
- **id.json** - Bahasa Indonesia - *Coming Soon*

## Usage

Currently using static JSON files for translations. Future implementation will integrate with a professional i18n library like `next-intl` or `react-i18next`.

## Structure

Each translation file follows a nested structure:
```json
{
  "section": {
    "key": "Translation value"
  }
}
```

## Guidelines

1. Keep keys descriptive and organized by component/section
2. Use snake_case for keys
3. Maintain consistent structure across all language files
4. Include context comments for complex translations