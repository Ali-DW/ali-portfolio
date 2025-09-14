import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '../Styles/GlobalStyles';

const SkillsWrapper = styled(Section)`
  background: ${props => props.theme.colors.mediumGray};
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>
        <h2>Skills Section (Coming Soon)</h2>
        <p>This is where your technical skills will be displayed.</p>
      </Container>
    </SkillsWrapper>
  );
};

export default Skills;