import React from "react";
//CSS
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import Variables from "../../Styles/Variables";
//Assets
import Logo from "../../Assets/LogoConSombra.png";
import { Location } from "@styled-icons/icomoon/Location";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { Mail } from "@styled-icons/heroicons-outline/Mail";

function Footer() {
  return (
    <Container>
      <FirstSubContainer>
        <Img src={Logo} />
        <Text>
          Comprá nuestros productos en nuestra tienda online. Llegamos a
          domicilio en 3 a 7 días hábiles con Logística Andreani.
        </Text>
      </FirstSubContainer>
      <Separator />
      <SecondSubContainer>
        <InfoContainer>
          <LocationIcon />
          <Info>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          </Info>
        </InfoContainer>
        <InfoContainer>
          <TelephoneIcon />
          <Info>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          </Info>
        </InfoContainer>
        <InfoContainer>
          <MailIcon />
          <Info>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          </Info>
        </InfoContainer>
      </SecondSubContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  ${GlobalStyles.container}
  flex-direction: column;
  height: 70%;
`;

const FirstSubContainer = styled.div`
  flex: 1;
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 120px;
`;

const Text = styled.p``;

const Separator = styled.div`
  border: 1px solid gray;
  width: 75%;
  border-radius: 100%;
`;

const SecondSubContainer = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LocationIcon = styled(Location)`
  color: ${Variables.principalColor};
  width: 50px;
`;

const TelephoneIcon = styled(Telephone)`
  color: ${Variables.principalColor};
  width: 50px;
`;

const MailIcon = styled(Mail)`
  color: ${Variables.principalColor};
  width: 50px;
`;

const Info = styled.p``;
