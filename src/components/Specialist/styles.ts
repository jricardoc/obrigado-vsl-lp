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

export const SpecialistContainer = styled.section`
  padding: ${theme.spacing.section.desktop} 0;
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    rgba(235, 70, 24, 0.03) 25%,
    #111111 50%,
    rgba(235, 70, 24, 0.02) 75%,
    #0a0a0a 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 20s ease infinite;
  position: relative;
  overflow: hidden;

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} 0;
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.container.desktop};
  position: relative;
  z-index: 1;

  ${media.tablet} {
    padding: 0 ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: 0 ${theme.spacing.container.mobile};
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;

  ${media.sm} {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["4xl"]};
  font-weight: 700;
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

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const SliderFullWidth = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
  box-sizing: border-box;

  .swiper {
    padding: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }
`;

export const SpecialistSlide = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(235, 70, 24, 0.2);
    }
  }
`;

export const SpecialistImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

export const NavigationButton = styled.div`
  &.swiper-button-prev,
  &.swiper-button-next {
    color: ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.5);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transition: all 0.3s ease;

    &::after {
      font-size: 18px;
      font-weight: bold;
    }

    ${media.hover} {
      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }

    ${media.sm} {
      width: 36px;
      height: 36px;

      &::after {
        font-size: 14px;
      }
    }
  }
`;

export const BackgroundOrb = styled.div<{ $position: "left" | "right" }>`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.colors.primary}10 0%,
    transparent 70%
  );
  filter: blur(60px);
  ${({ $position }) => $position}: -200px;
  top: ${({ $position }) => ($position === "left" ? "10%" : "60%")};
  pointer-events: none;

  ${media.tablet} {
    display: none;
  }
`;
