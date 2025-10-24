# Custom Fonts

This directory contains custom font files for the Krishi Shield application.

## Font Files

- `Geist.woff2` - Main sans-serif font
- `GeistMono.woff2` - Monospace font for code

## Implementation

Fonts are loaded via `@font-face` rules in `globals.css` to prevent preload warnings that were occurring with the Next.js Google Fonts optimization.

The original implementation used Next.js's built-in Google Fonts optimization with preloading, but this caused warnings in the browser console about unused preloaded resources. By hosting the fonts locally and loading them with `@font-face`, we maintain the same visual appearance while eliminating the console warnings.

## Font Optimization

All fonts are in WOFF2 format for optimal compression and browser support.