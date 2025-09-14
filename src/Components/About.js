import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '../Styles/GlobalStyles';

const AboutWrapper = styled(Section)`
  background: ${props => props.theme.colors.darkGray};
`;

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <h2>About Section (Coming Soon)</h2>
        <p>This is where your professional bio will go.</p>
      </Container>
    </AboutWrapper>
  );
};

export default About;