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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TrailsContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(
    135deg,
    ${theme.colors.dark} 0%,
    rgba(58, 149, 180, 0.04) 25%,
    ${theme.colors.dark} 50%,
    rgba(58, 149, 180, 0.03) 75%,
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
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.colors.secondary}10 0%,
    transparent 70%
  );
  filter: blur(40px);
  ${({ $position }) => $position}: -300px;
  top: ${({ $position }) => ($position === "left" ? "10%" : "50%")};
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
  font-size: ${theme.fontSizes["5xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  span {
    background: linear-gradient(
      135deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.secondaryLight} 50%,
      ${theme.colors.secondary} 100%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["4xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes["3xl"]};
  }
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes["2xl"]};
  color: ${theme.colors.white};
  font-weight: 500;

  ${media.lg} {
    font-size: ${theme.fontSizes.xl};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  ${media.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const TrailCard = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  position: relative;
  aspect-ratio: 720 / 1040;
  cursor: pointer;

  /* Desktop: hover effect elegante */
  ${media.hover} {
    &:hover {
      .trail-overlay {
        opacity: 1;
      }

      .trail-image {
        transform: scale(1.08);
        filter: brightness(0.4);
      }

      .trail-description {
        animation: ${fadeInUp} 0.4s ease forwards;
      }
    }
  }

  /* Mobile: layout diferente */
  ${media.noHover} {
    aspect-ratio: auto;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const TrailImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  ${media.noHover} {
    height: auto;
    aspect-ratio: 720 / 1040;
  }
`;

export const TrailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const TrailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 30%,
    rgba(0, 0, 0, 0.95) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  opacity: 0;
  transition: opacity 0.5s ease;

  ${media.noHover} {
    display: none;
  }
`;

export const TrailContent = styled.div`
  display: none;
  padding: 20px;

  ${media.noHover} {
    display: block;
  }
`;

export const TrailTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 12px;
  line-height: 1.3;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const TrailDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.white};
  line-height: 1.8;
  font-weight: 400;
  opacity: 0;

  /* Desktop overlay description */
  ${media.hover} {
    border-left: 3px solid ${theme.colors.secondary};
    padding-left: 16px;
    margin-top: 8px;
  }

  /* Mobile: sempre visível */
  ${media.noHover} {
    opacity: 1;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.grayLight};
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  ${media.sm} {
    margin-top: 40px;
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
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondaryDark} 100%
  );
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${theme.borderRadius.full};
  box-shadow: 0 4px 20px rgba(58, 149, 180, 0.4);
  transition: all 0.3s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(58, 149, 180, 0.5);
    }
  }

  ${media.sm} {
    width: 100%;
    padding: 16px 32px;
    font-size: ${theme.fontSizes.md};
  }
`;
