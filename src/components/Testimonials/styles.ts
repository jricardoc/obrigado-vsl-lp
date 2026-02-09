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

export const TestimonialsContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(
    135deg,
    ${theme.colors.black} 0%,
    rgba(58, 149, 180, 0.03) 25%,
    ${theme.colors.black} 50%,
    rgba(58, 149, 180, 0.02) 75%,
    ${theme.colors.black} 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;

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
  margin-bottom: 16px;
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
  margin-top: 12px;
  margin-bottom: 48px;

  span {
    color: ${theme.colors.primary};
  }

  ${media.lg} {
    font-size: ${theme.fontSizes["3xl"]};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes["2xl"]};
    margin-bottom: 32px;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background: linear-gradient(
    145deg,
    rgba(58, 149, 180, 0.1) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(58, 149, 180, 0.2);
  border-radius: ${theme.borderRadius.xl};
  padding: 32px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 220px;

  ${media.hover} {
    &:hover {
      border-color: ${theme.colors.secondary};
      transform: translateY(-4px);
    }
  }

  ${media.md} {
    min-height: auto;
  }

  ${media.sm} {
    padding: 24px;
  }
`;

export const QuoteIcon = styled.span`
  font-size: ${theme.fontSizes["4xl"]};
  color: ${theme.colors.secondary};
  opacity: 0.5;
  line-height: 1;
`;

export const QuoteText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.white};
  line-height: 1.7;
  font-style: italic;
  margin: 16px 0;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const AuthorName = styled.span`
  font-size: ${theme.fontSizes.md};
  font-weight: 600;
  color: ${theme.colors.secondary};

  &::before {
    content: "— ";
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  ${media.sm} {
    margin-top: 32px;
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
