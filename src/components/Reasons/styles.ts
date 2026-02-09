import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const ReasonsContainer = styled.section`
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ReasonCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.xl};
  padding: 40px;
  display: flex;
  gap: 24px;
  transition: all 0.4s ease;

  ${media.hover} {
    &:hover {
      transform: translateY(-6px);
      border-color: ${theme.colors.secondary};
      box-shadow: 0 15px 35px rgba(58, 149, 180, 0.1);
    }
  }

  ${media.sm} {
    padding: 28px;
    flex-direction: column;
    gap: 16px;
  }
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondaryDark} 100%
  );
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    color: ${theme.colors.white};
  }

  ${media.sm} {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 12px;

  ${media.sm} {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const CardDescription = styled.p`
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
