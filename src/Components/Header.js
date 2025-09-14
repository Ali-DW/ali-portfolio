import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ textAlign: 'center', color: '#00D4AA' }}>
        Ali Slil - Portfolio (Header Coming Soon)
      </div>
    </HeaderWrapper>
  );
};

export default Header;