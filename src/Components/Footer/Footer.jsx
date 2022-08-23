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
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

function Footer() {
  return (
    <Container>
      <FirstSubContainer>
        <Img src={Logo} />
        <Text>
          Elaboramos todos nuestros productos de forma artesanal y en pequeñas
          cantidades, respetando siempre la calidad de nuestras materias primas
          y procesos de elaboración.
        </Text>
      </FirstSubContainer>
      <Separator />
      <SecondSubContainer>
        <InfoContainer>
          <TelephoneIcon />
          <InfoTitle>Telefono</InfoTitle>
          <Info>(+54) 02944 608116</Info>
          <a href="tel: +5402944608116" style={{ textDecoration: "none" }}>
            <InfoText>Llámenos</InfoText>
          </a>
        </InfoContainer>
        <InfoContainer>
          <MailIcon />
          <InfoTitle>Correo Electronico</InfoTitle>
          <Info>productosdelmontanes@gmail.com</Info>
          <a
            href="mailto: productosdelmontanes@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <InfoText>Contáctenos por correo</InfoText>
          </a>
        </InfoContainer>
        <InfoContainer>
          <LocationIcon />
          <InfoTitle>Direccion</InfoTitle>
          <Info>Villa Traful, Neuquén</Info>
          <a
            href="https://www.google.com/maps/place/Productos+Artesanales+Del+Monta%C3%B1%C3%A9s/@-40.6600257,-71.3927806,19.25z/data=!4m5!3m4!1s0x9610ed8f9588b3c1:0x4bb61dfaf147e617!8m2!3d-40.6599888!4d-71.3928509"
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <InfoText>Q8403 Villa Traful, Neuquén</InfoText>
          </a>
        </InfoContainer>
      </SecondSubContainer>
      <Separator />
      <ThirdSubContainer>
        <a
          href="https://instagram.com/Del.montanes"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://api.whatsapp.com/send?text=Hola Del Montañes, vengo de la web... Quiero Alfajores!&phone=+5402944608116"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <WhatsappIcon />
        </a>

        <a
          href="https://m.facebook.com/ProductosArtesanalesDelMontanes"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <FacebookIcon />
        </a>
      </ThirdSubContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  ${GlobalStyles.container}
  flex-direction: column;
  height: 70%;
  padding-top: 20px;
  padding-bottom: 5px;
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
  background-color: #abababb4;
  height: 0.05%;
  width: 75%;
  border-radius: 100%;
`;

const SecondSubContainer = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  text-align: center;
`;

const LocationIcon = styled(Location)`
  color: ${Variables.principalColor};
  width: 35px;
`;

const TelephoneIcon = styled(Telephone)`
  color: ${Variables.principalColor};
  width: 35px;
`;

const MailIcon = styled(Mail)`
  color: ${Variables.principalColor};
  width: 35px;
`;

const InfoTitle = styled.h4`
  width: 100%;
  margin: 0;
  margin-top: 15px;
  text-decoration: underline;
`;

const Info = styled.p`
  width: 100%;
  margin: 10px 0px;
  font-size: 15px;
`;

const InfoText = styled.p`
  margin: 0;
  width: 100%;
  color: ${Variables.principalColor};
  font-size: 13px;
`;

const ThirdSubContainer = styled.div`
  flex: 0.3;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const InstagramIcon = styled(Instagram)`
  color: ${Variables.principalColor};
  width: 20px;
`;

const WhatsappIcon = styled(Whatsapp)`
  color: ${Variables.principalColor};
  width: 20px;
`;

const FacebookIcon = styled(Facebook)`
  color: ${Variables.principalColor};
  width: 20px;
`;
