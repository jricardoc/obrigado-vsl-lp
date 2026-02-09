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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FAQContainer = styled.section`
  padding: ${theme.spacing.section.desktop} ${theme.spacing.container.desktop};
  background: linear-gradient(
    135deg,
    ${theme.colors.dark} 0%,
    rgba(235, 70, 24, 0.02) 25%,
    ${theme.colors.dark} 50%,
    rgba(58, 149, 180, 0.02) 75%,
    ${theme.colors.dark} 100%
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 20s ease infinite;
  position: relative;

  ${media.tablet} {
    padding: ${theme.spacing.section.tablet} ${theme.spacing.container.tablet};
  }

  ${media.sm} {
    padding: ${theme.spacing.section.mobile} ${theme.spacing.container.mobile};
  }
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
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

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQItem = styled.div<{ $isOpen?: boolean }>`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen ? theme.colors.primary : "rgba(255, 255, 255, 0.1)"};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isOpen }) =>
    $isOpen &&
    `
    background: linear-gradient(
      145deg,
      rgba(235, 70, 24, 0.08) 0%,
      rgba(255, 255, 255, 0.03) 100%
    );
    box-shadow: 0 10px 30px rgba(235, 70, 24, 0.1);
  `}

  ${media.hover} {
    &:hover {
      border-color: ${theme.colors.primary};
      transform: translateX(4px);
    }
  }
`;

export const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background: transparent;
  color: ${({ $isOpen }) =>
    $isOpen ? theme.colors.primary : theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.primary};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  }

  ${media.hover} {
    &:hover {
      color: ${theme.colors.primary};
    }
  }

  ${media.sm} {
    padding: 20px;
    font-size: ${theme.fontSizes.md};
  }
`;

export const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FAQAnswerInner = styled.div`
  overflow: hidden;
`;

export const FAQAnswerContent = styled.div<{ $isOpen?: boolean }>`
  padding: 0 24px 24px;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.grayLight};
  line-height: 1.7;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : "none")} 0.4s ease;

  ${media.sm} {
    padding: 0 20px 20px;
    font-size: ${theme.fontSizes.sm};
  }
`;
