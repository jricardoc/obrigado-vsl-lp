import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const HowItWorksContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #0a0a0a 100%);

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} ${theme.spacing.container.mobile};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;

  ${media.sm} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["3xl"]};
  font-weight: 800;
  color: ${theme.colors.white};

  span {
    color: ${theme.colors.secondary};
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["2xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const StepCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(58, 149, 180, 0.1) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(58, 149, 180, 0.3);
  border-radius: ${theme.borderRadius.xl};
  padding: 40px 32px;
  position: relative;
  transition: all 0.4s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-8px);
      border-color: ${theme.colors.secondary};
      box-shadow: 0 20px 40px rgba(58, 149, 180, 0.15);
    }
  }

  ${media.sm} {
    padding: 32px 24px;
  }
`;

export const StepNumber = styled.span`
  position: absolute;
  top: -20px;
  left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondaryDark} 100%
  );
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xl};
  font-weight: 800;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(58, 149, 180, 0.4);

  ${media.sm} {
    width: 40px;
    height: 40px;
    font-size: ${theme.fontSizes.lg};
    top: -16px;
    left: 24px;
  }
`;

export const StepTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 16px;
  margin-top: 12px;

  ${media.sm} {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const StepDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.grayLight};
  line-height: 1.7;

  ${media.sm} {
    font-size: ${theme.fontSizes.sm};
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
