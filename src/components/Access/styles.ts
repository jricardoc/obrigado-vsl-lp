import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

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

export const AccessContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(
    135deg,
    ${theme.colors.dark} 0%,
    rgba(235, 70, 24, 0.03) 25%,
    ${theme.colors.dark} 50%,
    rgba(235, 70, 24, 0.02) 75%,
    ${theme.colors.dark} 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;
  overflow: hidden;

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} ${theme.spacing.container.mobile};
  }
`;

export const BackgroundOrb = styled.div<{ $position: "left" | "right" }>`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.colors.primary}10 0%,
    transparent 70%
  );
  ${({ $position }) => $position}: -250px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  ${media.tablet} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;

  ${media.sm} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["4xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 16px;

  span {
    color: ${theme.colors.primary};
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["3xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes["2xl"]};
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.xl};
  padding: 32px;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;

  ${media.hover} {
    &:hover {
      transform: translateY(-8px);
      border-color: ${theme.colors.primary};
      box-shadow: 0 20px 40px rgba(235, 70, 24, 0.15);
      background: linear-gradient(
        145deg,
        rgba(235, 70, 24, 0.1) 0%,
        rgba(255, 255, 255, 0.02) 100%
      );
    }
  }

  ${media.lg} {
    min-height: 280px;
  }

  ${media.sm} {
    padding: 24px;
    min-height: auto;
  }
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryDark} 100%
  );
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    color: ${theme.colors.white};
  }

  ${media.sm} {
    width: 56px;
    height: 56px;
    margin-bottom: 20px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 12px;
  line-height: 1.3;
  flex-shrink: 0;

  ${media.sm} {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const CardDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.grayLight};
  line-height: 1.6;
  flex: 1;

  ${media.sm} {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  ${media.sm} {
    margin-top: 32px;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 48px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryDark} 100%
  );
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 0 4px 20px rgba(235, 70, 24, 0.4);
  transition: all 0.3s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(235, 70, 24, 0.5);
    }
  }

  ${media.sm} {
    width: 100%;
    padding: 16px 32px;
    font-size: ${theme.fontSizes.md};
  }
`;
