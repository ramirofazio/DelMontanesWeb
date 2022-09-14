import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import Variables from "../../Styles/Variables";
import ClipLoader from "react-spinners/ClipLoader";

function Fallback() {
  return (
    <Container>
      <Title>Cargando</Title>
      <ClipLoader color={Variables.principalColor} size={60} loading={true} />
    </Container>
  );
}

export default Fallback;

const Container = styled.div`
  ${GlobalStyles.container};
  ${GlobalStyles.fadeInAnimation};
  flex-direction: column;
  background: ${Variables.navBarTransparentColor};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Title = styled.h2`
  color: ${Variables.principalColor};
  font-family: ${Variables.secondaryFont};
`;
