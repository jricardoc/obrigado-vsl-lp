import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { media } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    
    ${media.lg} {
      font-size: 15px;
    }
    
    ${media.sm} {
      font-size: 14px;
    }
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${theme.transitions.normal};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: ${theme.transitions.normal};
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.grayLight};
  }

  /* Selection */
  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  /* Focus visible */
  :focus-visible {
    outline: 2px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }

  /* Disable hover on touch devices */
  ${media.noHover} {
    * {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;
