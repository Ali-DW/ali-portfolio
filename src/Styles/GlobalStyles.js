import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${props => props.theme.animations.transition};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: ${props => props.theme.animations.transition};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.darkGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.gradients.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }

  /* Selection styles */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

// Common styled components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 ${props => props.theme.spacing.sm};
  }
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing['3xl']} 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing['2xl']} 0;
  }
`;

export const Button = styled.button`
  background: ${props => props.primary ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.primary ? props.theme.colors.dark : props.theme.colors.primary};
  border: ${props => props.primary ? 'none' : `2px solid ${props.theme.colors.primary}`};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.md};
  transition: ${props => props.theme.animations.transition};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GradientText = styled.span`
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export default GlobalStyles;