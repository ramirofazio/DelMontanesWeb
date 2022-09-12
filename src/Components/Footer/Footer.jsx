import React from "react";
import styled from "styled-components";
import Variables from "../../Styles/Variables";
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
        <a href="tel: +5402944669596" style={{ textDecoration: "none" }}>
          <InfoContainer>
            <TelephoneIcon />
            <InfoTitle>Telefono</InfoTitle>
            <Info>(+54) 02944 669596</Info>
          </InfoContainer>
        </a>
        <a
          href="mailto: productosdelmontanes@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <InfoContainer>
            <MailIcon />
            <InfoTitle>Correo Electronico</InfoTitle>
            <Info>productosdelmontanes@gmail.com</Info>
          </InfoContainer>
        </a>
        <a
          href="https://www.google.com/maps/place/Productos+Artesanales+Del+Monta%C3%B1%C3%A9s/@-40.6600257,-71.3927806,19.25z/data=!4m5!3m4!1s0x9610ed8f9588b3c1:0x4bb61dfaf147e617!8m2!3d-40.6599888!4d-71.3928509"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <InfoContainer>
            <LocationIcon />
            <InfoTitle>Direccion</InfoTitle>
            <Info>Villa Traful, Neuquén</Info>
          </InfoContainer>
        </a>
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
          href="https://api.whatsapp.com/send?text=Hola Del Montañes, vengo de la web... Quiero Alfajores!&phone=+5402944669596"
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
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #abababb4;

  @media (${Variables.tabletL}) {
    height: 50vh;
  }

  @media (${Variables.mobileL}) {
    height: 20vh;
    padding: 0;
    padding-bottom: 20px;
  }

  @media (${Variables.mobileS}) {
    padding-top: 5px;
  }
`;

const FirstSubContainer = styled.div`
  flex: 1;
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (${Variables.tabletL}) {
    width: 100%;
  }

  @media (${Variables.mobileL}) {
    width: 90%;
  } ;
`;

const Img = styled.img`
  width: 120px;

  @media (${Variables.tabletL}) {
    width: 80px;
  }

  @media (${Variables.mobileL}) {
    width: 60px;
  } ;
`;

const Text = styled.p`
  font-weight: 400;

  @media (${Variables.tabletL}) {
    font-size: 13px;
    width: 70%;
  }

  @media (${Variables.mobileL}) {
    font-size: 11px;
    width: 100%;
  }

  @media (${Variables.mobileS}) {
    font-size: 10px;
  }
`;

const Separator = styled.div`
  background-color: #abababb4;
  height: 1px;
  width: 75%;
  border-radius: 100%;
  margin-bottom: 10px;
  margin: 10px 0;

  @media (${Variables.mobileL}) {
    display: none;
  } ;
`;

const SecondSubContainer = styled.div`
  flex: 1;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${Variables.tabletL}) {
    width: 100%;
  }

  @media (${Variables.mobileL}) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  transition: ${Variables.basicTransition};

  &:hover {
    background: ${Variables.transparentColor};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
`;

const TelephoneIcon = styled(Telephone)`
  color: ${Variables.principalColor};
  width: 35px;

  @media (${Variables.tabletL}) {
    width: 20px;
  }
`;

const MailIcon = styled(Mail)`
  color: ${Variables.principalColor};
  width: 35px;

  @media (${Variables.tabletL}) {
    width: 20px;
  }
`;

const LocationIcon = styled(Location)`
  color: ${Variables.principalColor};
  width: 35px;

  @media (${Variables.tabletL}) {
    width: 20px;
  }
`;

const InfoTitle = styled.h4`
  width: 100%;
  margin: 0;
  margin-top: 15px;
  text-decoration: none;
  color: black;

  @media (${Variables.tabletL}) {
    font-size: 13px;
  }
`;

const Info = styled.p`
  width: 100%;
  margin: 10px 0px;
  font-size: 15px;
  text-decoration: none;
  color: ${Variables.principalColor};

  @media (${Variables.tabletL}) {
    font-size: 12px;
  }
`;

const ThirdSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  margin-top: 5px;

  @media (${Variables.tabletL}) {
    margin-bottom: -10px;
    width: 35%;
  }

  @media (${Variables.mobileL}) {
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid #abababb4;
  } ;
`;

const InstagramIcon = styled(Instagram)`
  color: ${Variables.principalColor};
  width: 20px;
  transition: ${Variables.basicTransition};

  @media (${Variables.tabletL}) {
    width: 15px;
  }

  &:hover {
    color: ${Variables.transparentColor};
  }
`;

const WhatsappIcon = styled(Whatsapp)`
  color: ${Variables.principalColor};
  width: 20px;
  transition: ${Variables.basicTransition};

  @media (${Variables.tabletL}) {
    width: 15px;
  }

  &:hover {
    color: ${Variables.transparentColor};
  }
`;

const FacebookIcon = styled(Facebook)`
  color: ${Variables.principalColor};
  width: 20px;
  transition: ${Variables.basicTransition};

  @media (${Variables.tabletL}) {
    width: 15px;
  }

  &:hover {
    color: ${Variables.transparentColor};
  }
`;
