import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '../Styles/GlobalStyles';

const ContactWrapper = styled(Section)`
  background: ${props => props.theme.colors.darkGray};
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <h2>Contact Section (Coming Soon)</h2>
        <p>This is where visitors can get in touch with you.</p>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;