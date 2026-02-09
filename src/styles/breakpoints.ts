export const breakpoints = {
  "screen-xl": 1600,
  "screen-lg": 1200,
  "screen-tablet": 1040,
  "screen-md": 998,
  "screen-sm": 768,
  "screen-xs": 468,
} as const;

export const media = {
  xl: `@media (max-width: ${breakpoints["screen-xl"]}px)`,
  lg: `@media (max-width: ${breakpoints["screen-lg"]}px)`,
  tablet: `@media (max-width: ${breakpoints["screen-tablet"]}px)`,
  md: `@media (max-width: ${breakpoints["screen-md"]}px)`,
  sm: `@media (max-width: ${breakpoints["screen-sm"]}px)`,
  xs: `@media (max-width: ${breakpoints["screen-xs"]}px)`,
  hover: `@media (min-width: 1050px)`,
  noHover: `@media (max-width: 1049px)`,
} as const;

export type Breakpoints = typeof breakpoints;
export type Media = typeof media;
