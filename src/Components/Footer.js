import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.dark};
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.mediumGray};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>© 2025 Ali Slil. All rights reserved.</div>
    </FooterWrapper>
  );
};

export default Footer;