import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const BenefitsContainer = styled.section`
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
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.xl};
    opacity: 0.3;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  ${media.hover} {
    &:hover img {
      transform: scale(1.02);
    }
  }

  ${media.tablet} {
    order: 2;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${media.tablet} {
    order: 1;
    text-align: center;
    align-items: center;
  }
`;

export const SectionLabel = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes["4xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  line-height: 1.2;

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

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.grayLight};
  line-height: 1.5;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondaryDark} 100%
  );
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
    color: ${theme.colors.white};
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    ${theme.colors.secondary}20 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  top: 50%;
  left: -200px;
  transform: translateY(-50%);

  ${media.tablet} {
    display: none;
  }
`;
