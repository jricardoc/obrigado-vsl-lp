import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(235, 70, 24, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(235, 70, 24, 0.5);
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0a0a0a 100%);
  overflow: hidden;

  ${media.sm} {
    padding: 24px 16px 40px;
  }
`;

export const BackgroundCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${media.sm} {
    gap: 12px;
  }
`;

export const WarningBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(235, 70, 24, 0.15);
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  animation: ${pulse} 2s ease-in-out infinite;

  span {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.sm};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ${media.sm} {
    padding: 6px 16px;

    span {
      font-size: ${theme.fontSizes.xs};
    }
  }
`;

export const Headline = styled.h1`
  text-align: center;
  font-size: ${theme.fontSizes["5xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  line-height: 1.1;
  max-width: 800px;

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

export const HeadlineHighlight = styled.span`
  color: ${theme.colors.primary};
  display: block;
`;

export const Subheadline = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.grayLight};
  max-width: 600px;

  strong {
    color: ${theme.colors.white};
    font-weight: 600;
  }

  ${media.md} {
    font-size: ${theme.fontSizes.lg};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  animation: ${glow} 3s ease-in-out infinite;
  background: ${theme.colors.black};

  ${media.sm} {
    border-radius: ${theme.borderRadius.lg};
  }
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(
    to top,
    ${theme.colors.dark} 0%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
`;

export const HotmartWidgetWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 0 0;

  /* Estilos para o widget da Hotmart */
  #hotmart-sales-funnel {
    width: 100%;
  }

  ${media.sm} {
    padding: 8px 0 0;
  }
`;
