import styled from "styled-components";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

export const FooterContainer = styled.footer`
  padding: 80px ${theme.spacing.container.desktop} 40px;
  background: linear-gradient(180deg, ${theme.colors.dark} 0%, #050505 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  ${media.tablet} {
    padding: 60px ${theme.spacing.container.tablet} 32px;
  }

  ${media.sm} {
    padding: 48px ${theme.spacing.container.mobile} 24px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  text-align: center;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${media.sm} {
    gap: 32px;
    padding-bottom: 32px;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;

  ${media.sm} {
    height: 48px;
  }
`;

export const TagLine = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.grayLight};
  max-width: 500px;
  line-height: 1.6;

  ${media.sm} {
    font-size: ${theme.fontSizes.md};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${theme.colors.grayLight};
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  ${media.hover} {
    &:hover {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      transform: translateY(-3px);
    }
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;

  ${media.md} {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray};
`;

export const Developer = styled.a`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;

  span {
    background: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  ${media.hover} {
    &:hover {
      color: ${theme.colors.white};
    }
  }
`;

export const Divider = styled.div`
  width: 4px;
  height: 4px;
  background: ${theme.colors.gray};
  border-radius: 50%;

  ${media.md} {
    display: none;
  }
`;
