---
name: Relay Estate Premium
version: "1.0.0"
colors:
  surface: "#0b1326"
  surface-dim: "#0b1326"
  surface-bright: "#31394d"
  surface-container: "#171f33"
  on-surface: "#dae2fd"
  primary: "#ffffff"
  on-primary: "#2f3131"
  secondary: "#adc9eb"
  accent: "#C88D5F"
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 84px
    fontWeight: "700"
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
rounded:
  sm: 0.25rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
spacing:
  unit: 8px
  container-padding: 24px
components:
  glass-card:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: 24px
---

## Brand & Style
The design system for Relay Estate Premium centers on an **Atmospheric Glass** aesthetic. It evokes a sense of high-end automation and clarity, transforming real estate lead management into a serene, premium experience.

The UI relies on deep indigo surfaces with frosted crystalline lenses (glassmorphism) that focus user attention on high-value data and interaction points.

## Colors
- **Surface**: Deep Indigo (#0b1326) provides a solid, premium foundation.
- **Glass**: Component backgrounds use `rgba(255, 255, 255, 0.05)` to `0.1` with a `blur(20px)` filter.
- **Accent**: Copper (#C88D5F) is used sparingly for critical call-to-actions and status indicators, providing warmth against the cool indigo.

## Typography
We use **Inter** for its neutral, geometric clarity. On frosted glass, font weights are slightly increased to ensure legibility against the background blur.

## Elevation & Depth
Depth is achieved through layering glass surfaces.
- **Level 1**: Base surface (#0b1326).
- **Level 2**: Standard glass cards with 20px blur and 1px borders at 10% opacity.
- **Level 3**: Interactive elements with 40px blur and higher contrast borders.
