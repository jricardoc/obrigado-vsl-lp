import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const LearningContainer = styled.section`
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

export const SectionLabel = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["4xl"]};
  font-weight: 800;
  color: ${theme.colors.white};

  span {
    color: ${theme.colors.secondary};
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
  padding-left: ${theme.spacing.container.desktop};

  ${media.tablet} {
    padding-left: ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding-left: ${theme.spacing.container.mobile};
  }

  .swiper {
    padding: 20px 0;
    overflow: visible;
  }

  .swiper-slide {
    width: 320px;
    height: auto;

    ${media.sm} {
      width: 280px;
    }
  }
`;

export const LearningCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(58, 149, 180, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 1px solid rgba(58, 149, 180, 0.3);
  border-radius: ${theme.borderRadius.xl};
  padding: 28px;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-6px);
      border-color: ${theme.colors.secondary};
      box-shadow: 0 15px 35px rgba(58, 149, 180, 0.2);
      background: linear-gradient(
        145deg,
        rgba(58, 149, 180, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
    }
  }

  ${media.sm} {
    padding: 24px;
    min-height: 180px;
  }
`;

export const CardNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  font-weight: 700;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 12px;
  line-height: 1.3;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const CardDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.grayLight};
  line-height: 1.6;
  flex: 1;
`;
