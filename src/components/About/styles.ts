import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const AboutContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: ${theme.colors.dark};
  position: relative;
  overflow: hidden;

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} ${theme.spacing.container.mobile};
  }
`;

export const ContentGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;

  ${media.lg} {
    gap: 60px;
  }

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  ${media.tablet} {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.borderRadius.xl};
  position: relative;
  z-index: 1;
`;

export const ImageDecoration = styled.div`
  position: absolute;
  inset: -20px;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.xl};
  opacity: 0.3;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.xl};
    opacity: 0.2;
  }

  ${media.sm} {
    inset: -10px;

    &::before {
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
    }
  }
`;

export const ContentCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.xl};
  padding: 48px;

  ${media.tablet} {
    order: 2;
  }

  ${media.sm} {
    padding: 32px 24px;
  }
`;

export const CardTitle = styled.h2`
  font-size: ${theme.fontSizes["3xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 24px;

  span {
    color: ${theme.colors.secondary};
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["2xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 20px;
  }
`;

export const CardText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.grayLight};
  line-height: 1.8;
  margin-bottom: 32px;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 24px;
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

export const GlowOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    ${theme.colors.secondary}15 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  top: 50%;
  right: -200px;
  transform: translateY(-50%);

  ${media.tablet} {
    display: none;
  }
`;
