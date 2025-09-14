import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '../Styles/GlobalStyles';

const ProjectsWrapper = styled(Section)`
  background: ${props => props.theme.colors.dark};
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Container>
        <h2>Projects Section (Coming Soon)</h2>
        <p>This is where your amazing projects will be showcased.</p>
      </Container>
    </ProjectsWrapper>
  );
};

export default Projects;