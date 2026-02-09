import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

export const ModalContent = styled.div`
  background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%);
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid rgba(235, 70, 24, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(235, 70, 24, 0.15);

  ${media.sm} {
    max-height: 95vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgba(255, 255, 255, 0.7);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  z-index: 10;

  ${media.hover} {
    &:hover {
      background: rgba(235, 70, 24, 0.3);
      color: ${theme.colors.white};
      transform: rotate(90deg);
    }
  }
`;

export const ModalHeader = styled.div`
  text-align: center;
  padding: 40px 32px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${media.sm} {
    padding: 32px 20px 20px;
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 120px;
  height: auto;
  margin: 0 auto 20px;

  ${media.sm} {
    max-width: 100px;
    margin-bottom: 16px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 600;
  color: ${theme.colors.white};
  line-height: 1.4;

  span {
    color: ${theme.colors.primary};
  }

  ${media.sm} {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const ModalBody = styled.form`
  padding: 32px;

  ${media.sm} {
    padding: 24px 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.md};
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    background: rgba(235, 70, 24, 0.05);
    box-shadow: 0 0 0 3px rgba(235, 70, 24, 0.15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #ff6b3d 100%);
  border: none;
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
  box-shadow: 0 4px 20px rgba(235, 70, 24, 0.4);

  ${media.hover} {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(235, 70, 24, 0.5);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecurityNote = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.5);
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    color: #4ade80;
  }
`;
