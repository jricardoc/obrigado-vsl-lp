import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

// Animações
const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(5deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const gradientFlow = keyframes`
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

// Container com gradiente animado
export const AnimatedBgContainer = styled.div<{
  $variant?: "primary" | "secondary" | "mixed";
}>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $variant }) => {
      switch ($variant) {
        case "primary":
          return `linear-gradient(
            135deg,
            ${theme.colors.dark} 0%,
            rgba(235, 70, 24, 0.05) 25%,
            ${theme.colors.dark} 50%,
            rgba(235, 70, 24, 0.03) 75%,
            ${theme.colors.dark} 100%
          )`;
        case "secondary":
          return `linear-gradient(
            135deg,
            ${theme.colors.dark} 0%,
            rgba(58, 149, 180, 0.05) 25%,
            ${theme.colors.dark} 50%,
            rgba(58, 149, 180, 0.03) 75%,
            ${theme.colors.dark} 100%
          )`;
        default:
          return `linear-gradient(
            135deg,
            ${theme.colors.dark} 0%,
            rgba(235, 70, 24, 0.04) 20%,
            ${theme.colors.dark} 40%,
            rgba(58, 149, 180, 0.04) 60%,
            ${theme.colors.dark} 80%,
            rgba(235, 70, 24, 0.02) 100%
          )`;
      }
    }};
    background-size: 400% 400%;
    animation: ${gradientFlow} 20s ease infinite;
  }
`;

// Elementos decorativos de trading - Gráfico de linha
export const ChartLine = styled.svg<{ $position: "left" | "right" | "center" }>`
  position: absolute;
  width: 300px;
  height: 150px;
  opacity: 0.08;
  ${({ $position }) => {
    switch ($position) {
      case "left":
        return "left: 5%; top: 20%;";
      case "right":
        return "right: 5%; bottom: 20%;";
      default:
        return "left: 50%; top: 50%; transform: translate(-50%, -50%);";
    }
  }}
  animation: ${pulse} 4s ease-in-out infinite;

  path {
    stroke: ${theme.colors.secondary};
    stroke-width: 2;
    fill: none;
  }
`;

// Candlesticks decorativos
export const CandlestickPattern = styled.div<{
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
}>`
  position: absolute;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  opacity: 0.06;
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  animation: ${float} 8s ease-in-out infinite;
`;

export const Candlestick = styled.div<{
  $height: number;
  $color: "green" | "red";
}>`
  width: 12px;
  height: ${({ $height }) => $height}px;
  background: ${({ $color }) =>
    $color === "green" ? "#22c55e" : theme.colors.primary};
  border-radius: 2px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 15px;
    background: inherit;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    top: -12px;
  }

  &::after {
    bottom: -12px;
  }
`;

// Círculos decorativos com números (porcentagens)
export const PercentageOrb = styled.div<{
  $size: number;
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $delay?: number;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.secondary}30;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.secondary}40;
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  animation: ${moveUpDown} ${({ $delay }) => 5 + ($delay || 0)}s ease-in-out
    infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
`;

// Grid pattern
export const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

// Orbs flutuantes maiores
export const FloatingOrb = styled.div<{
  $size: number;
  $color: "primary" | "secondary";
  $top?: string;
  $left?: string;
  $right?: string;
  $bottom?: string;
  $blur?: number;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) =>
    $color === "primary"
      ? `radial-gradient(circle, ${theme.colors.primary}15 0%, transparent 70%)`
      : `radial-gradient(circle, ${theme.colors.secondary}15 0%, transparent 70%)`};
  filter: blur(${({ $blur }) => $blur || 0}px);
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  animation: ${float} 10s ease-in-out infinite;
`;

// Linhas diagonais decorativas
export const DiagonalLines = styled.div<{
  $position: "topLeft" | "bottomRight";
}>`
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.03;
  ${({ $position }) =>
    $position === "topLeft" ? "top: 0; left: 0;" : "bottom: 0; right: 0;"}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      ${theme.colors.white} 0px,
      ${theme.colors.white} 1px,
      transparent 1px,
      transparent 20px
    );
  }
`;

// Noise texture overlay
export const NoiseTexture = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.02;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
`;
