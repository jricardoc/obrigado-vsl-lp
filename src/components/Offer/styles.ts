import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(235, 70, 24, 0.4);
  }
  50% {
    box-shadow: 0 0 60px rgba(235, 70, 24, 0.6);
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

export const OfferContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(
    180deg,
    #0a0805 0%,
    ${theme.colors.dark} 50%,
    #0a0805 100%
  );
  position: relative;
  overflow: hidden;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.tablet} {
    order: 2;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes["3xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 32px;

  span {
    color: ${theme.colors.primary};
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["2xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 24px;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryDark} 100%
  );
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 14px;
    height: 14px;
    color: ${theme.colors.white};
  }
`;

export const BenefitText = styled.span`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.white};
  line-height: 1.5;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const OfferCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(235, 70, 24, 0.15) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius["2xl"]};
  padding: 48px;
  text-align: center;
  animation: ${pulse} 3s ease-in-out infinite;

  ${media.tablet} {
    order: 1;
  }

  ${media.sm} {
    padding: 32px 24px;
  }
`;

export const OfferBadge = styled.span`
  display: inline-block;
  padding: 8px 24px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: 24px;
`;

export const OldPrice = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.gray};
  text-decoration: line-through;
  margin-bottom: 8px;
`;

export const PriceLabel = styled.span`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.grayLight};
  display: block;
  margin-bottom: 8px;
`;

export const InstallmentPrice = styled.div`
  font-size: ${theme.fontSizes["5xl"]};
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 8px;
  line-height: 1;

  span {
    font-size: ${theme.fontSizes["2xl"]};
    font-weight: 600;
  }

  ${media.sm} {
    font-size: ${theme.fontSizes["4xl"]};

    span {
      font-size: ${theme.fontSizes.xl};
    }
  }
`;

export const CashPrice = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.grayLight};
  margin-bottom: 32px;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 32px;
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
  border-radius: ${theme.borderRadius.lg};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 3s linear infinite;
  }

  ${media.hover} {
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 30px rgba(235, 70, 24, 0.5);
    }
  }

  ${media.sm} {
    padding: 18px 24px;
    font-size: ${theme.fontSizes.md};
  }
`;

export const GlowOrb = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    ${theme.colors.primary}15 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  top: 50%;
  ${({ position }) => position}: -250px;
  transform: translateY(-50%);

  ${media.tablet} {
    display: none;
  }
`;
