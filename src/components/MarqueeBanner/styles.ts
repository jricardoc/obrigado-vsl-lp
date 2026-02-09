import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MarqueeContainer = styled.section`
  width: 100%;
  background: linear-gradient(
    90deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primaryDark} 50%,
    ${theme.colors.primary} 100%
  );
  padding: 20px 0;
  overflow: hidden;
  position: relative;

  ${media.sm} {
    padding: 16px 0;
  }
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 30px;

  ${media.sm} {
    gap: 40px;
    padding: 0 20px;
  }
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.white};
    flex-shrink: 0;

    ${media.sm} {
      width: 20px;
      height: 20px;
    }
  }

  span {
    font-size: ${theme.fontSizes.lg};
    font-weight: 600;
    color: ${theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    ${media.sm} {
      font-size: ${theme.fontSizes.md};
    }
  }
`;

export const Separator = styled.span`
  width: 8px;
  height: 8px;
  background: ${theme.colors.white};
  border-radius: 50%;
  opacity: 0.6;
`;

export const GradientEdge = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 0;
  ${({ position }) => position}: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    ${({ position }) => (position === "left" ? "90deg" : "270deg")},
    ${theme.colors.primary} 0%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;

  ${media.sm} {
    width: 50px;
  }
`;
