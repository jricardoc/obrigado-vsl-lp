export const theme = {
  colors: {
    primary: "#eb4618",
    primaryLight: "#ff6b4a",
    primaryDark: "#c93a12",
    secondary: "#3a95b4",
    secondaryLight: "#5ab5d4",
    secondaryDark: "#2a7590",
    dark: "#0d0300",
    darkAlt: "#1a1a1a",
    gray: "#6b6b6b",
    grayLight: "#8a8a8a",
    grayDark: "#4a4a4a",
    black: "#000000",
    white: "#ffffff",
    whiteAlpha: "rgba(255, 255, 255, 0.1)",
    blackAlpha: "rgba(0, 0, 0, 0.5)",
  },
  fonts: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Outfit', 'Inter', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
  spacing: {
    section: {
      desktop: "120px",
      tablet: "80px",
      mobile: "60px",
    },
    container: {
      desktop: "80px",
      tablet: "40px",
      mobile: "20px",
    },
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    glow: "0 0 40px rgba(235, 70, 24, 0.3)",
    glowSecondary: "0 0 40px rgba(58, 149, 180, 0.3)",
  },
  transitions: {
    fast: "0.15s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
  },
  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    tooltip: 400,
  },
} as const;

export type Theme = typeof theme;
