import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const pulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(235, 70, 24, 0.5);
  }
  50% {
    text-shadow: 0 0 40px rgba(235, 70, 24, 0.8), 0 0 60px rgba(235, 70, 24, 0.4);
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const CTAContainer = styled.section`
  padding: 100px ${theme.spacing.container.desktop};
  background: linear-gradient(
    135deg,
    ${theme.colors.dark} 0%,
    #1a0a05 25%,
    ${theme.colors.dark} 50%,
    #051a1a 75%,
    ${theme.colors.dark} 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;
  overflow: hidden;

  ${media.tablet} {
    padding: 80px ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: 60px ${theme.spacing.container.mobile};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["5xl"]};
  font-weight: 800;
  color: ${theme.colors.primary};
  animation: ${pulse} 2s ease-in-out infinite;
  line-height: 1.2;

  ${media.lg} {
    font-size: ${theme.fontSizes["4xl"]};
  }

  ${media.md} {
    font-size: ${theme.fontSizes["3xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes["2xl"]};
  }
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.grayLight};
  margin-top: 24px;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
    margin-top: 16px;
  }
`;

export const DecorativeOrb = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    ${({ position }) =>
        position === "left" ? theme.colors.primary : theme.colors.secondary}20
      0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  ${({ position }) => position}: -150px;
  top: 50%;
  transform: translateY(-50%);

  ${media.tablet} {
    display: none;
  }
`;
