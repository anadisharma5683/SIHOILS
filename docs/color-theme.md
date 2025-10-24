# Color Theme Documentation

This document describes the new generalized color theme for Krishi Shield, based on the provided color palette.

## Color Palette

The new theme uses the following colors:

- **Cambridge Blue**: `#8aa399` - Used for secondary backgrounds and highlights
- **Paynes Gray**: `#545e75` - Used for accents and text
- **Yinmn Blue**: `#304d6d` - Primary color for buttons and important elements
- **Melon**: `#fcb1a6` - Error states and warnings
- **Nyanza**: `#d5f9de` - Main background color

## Theme Implementation

The theme is implemented in the following files:

1. `src/constants/theme.ts` - JavaScript/TypeScript theme object
2. `src/constants/colors.ts` - JavaScript/TypeScript color constants
3. `src/app/globals.css` - CSS custom properties

## Color Usage Guide

### Primary Colors
- **Primary**: Yinmn Blue (`#304d6d`) - Used for primary buttons, links, and important UI elements
- **Secondary**: Cambridge Blue (`#8aa399`) - Used for secondary backgrounds and less important UI elements
- **Accent**: Paynes Gray (`#545e75`) - Used for cards, borders, and technical elements

### Background Colors
- **Background**: Nyanza (`#d5f9de`) - Main page background
- **Soft Background**: Nyanza (`#d5f9de`) - Section backgrounds
- **Neutral**: Off-white (`#f9fafb`) - Neutral areas and cards

### Text Colors
- **Text**: Dark Gray (`#374151`) - Primary text
- **Text Secondary**: Paynes Gray (`#545e75`) - Secondary text and descriptions

### Status Colors
- **Highlight**: Cambridge Blue (`#8aa399`) - For emphasis and success states
- **Warning**: Amber (`#f59e0b`) - Warnings and cautions
- **Error**: Melon (`#fcb1a6`) - Error states and destructive actions

## CSS Custom Properties

The theme is also available as CSS custom properties:

```css
:root {
  --primary: #304d6d;      /* Yinmn Blue */
  --secondary: #8aa399;    /* Cambridge Blue */
  --accent: #545e75;       /* Paynes Gray */
  --soft-bg: #d5f9de;      /* Nyanza */
  --border: #e5e7eb;       /* Light Gray */
  --neutral: #f9fafb;      /* Off-white */
  --highlight: #8aa399;    /* Cambridge Blue */
  --text: #374151;         /* Dark Gray */
  --text-secondary: #545e75; /* Paynes Gray */
  --warning: #f59e0b;      /* Amber */
  --error: #fcb1a6;        /* Melon */
}
```

## Usage in Components

To use the theme in components, you can either:

1. Import the theme object:
```javascript
import { theme } from '@/constants/theme';

const MyComponent = () => {
  return <div style={{ backgroundColor: theme.primary }}>Hello</div>;
};
```

2. Use CSS custom properties:
```css
.my-component {
  background-color: var(--primary);
  color: var(--text);
}
```

This new theme provides a more cohesive and professional look while maintaining good accessibility standards.