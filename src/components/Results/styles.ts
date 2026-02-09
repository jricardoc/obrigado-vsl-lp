import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const ResultsContainer = styled.section`
  padding: ${theme.spacing.section.desktop} 0;
  background: ${theme.colors.black};
  overflow: hidden;

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} 0;
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
  padding: 0 ${theme.spacing.container.desktop};

  ${media.tablet} {
    padding: 0 ${theme.spacing.container.tablet};
    margin-bottom: 40px;
  }

  ${media.sm} {
    padding: 0 ${theme.spacing.container.mobile};
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["4xl"]};
  font-weight: 800;
  color: ${theme.colors.white};

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

export const SwiperWrapper = styled.div`
  width: 100%;

  .swiper {
    padding: 20px 0;
  }

  .swiper-slide {
    width: 300px;
    height: auto;

    ${media.sm} {
      width: 250px;
    }
  }
`;

export const ResultCard = styled.div`
  background: ${theme.colors.darkAlt};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  ${media.hover} {
    &:hover {
      transform: scale(1.02);
      border-color: ${theme.colors.secondary};
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  padding: 0 ${theme.spacing.container.desktop};

  ${media.tablet} {
    padding: 0 ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    margin-top: 32px;
    padding: 0 ${theme.spacing.container.mobile};
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
