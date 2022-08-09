import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;

function Contact() {
  return (
    <StyledContainer>
      <h1> Contact</h1>
    </StyledContainer>
  );
}

export default Contact;
