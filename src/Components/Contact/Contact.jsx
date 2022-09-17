import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Variables from "../../Styles/Variables";

function Alfajores() {
  return (
    <StyledContainer>
      <StyledSubContainer></StyledSubContainer>

      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          consulta: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string().max(15).required("*"),
          apellido: Yup.string().max(15).required("*"),
          email: Yup.string().email().required("*"),
          telefono: Yup.number().max(15).required("*"),
          consulta: Yup.string().max(200).required("*"),
        })}
      >
        <StyledForm>
          <Title>CONSULTAS O SUGERENCIAS</Title>
          <StyledRow>
            <StyledInputContainer>
              <ErrorMessage
                name="nombre"
                render={(msg) => <StyledErrorMsj>{msg}</StyledErrorMsj>}
              />
              <StyledLabel htmlFor="nombre">Nombre</StyledLabel>
              <StyledField name="nombre" type="text" />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="apellido">Apellido</StyledLabel>
              <StyledField name="apellido" type="text" />
              <ErrorMessage
                name="apellido"
                render={(msg) => <StyledErrorMsj>{msg}</StyledErrorMsj>}
              />
            </StyledInputContainer>
          </StyledRow>

          <StyledRow>
            <StyledInputContainer>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledField name="email" type="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <StyledErrorMsj>{msg}</StyledErrorMsj>}
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabel htmlFor="telefono">Telefono</StyledLabel>
              <StyledField name="telefono" type="number" />
              <ErrorMessage
                name="telefono"
                render={(msg) => <StyledErrorMsj>{msg}</StyledErrorMsj>}
              />
            </StyledInputContainer>
          </StyledRow>

          <StyledLabel htmlFor="consulta">Consulta</StyledLabel>
          <StyledTextArea name="consulta" type="text" as={"textarea"} />
          <ErrorMessage
            name="consulta"
            render={(msg) => <StyledErrorMsj>{msg}</StyledErrorMsj>}
          />

          <StyledBtnContainer>
            <StyledBtn type="submit">ENVIAR MENSAJE</StyledBtn>
          </StyledBtnContainer>
        </StyledForm>
      </Formik>
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
  background-color: ${Variables.baseColor};
`;

const StyledSubContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${Variables.secondaryColor};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding-inline: 50px;
  height: 100%;
`;

const Title = styled.h1`
  color: ${Variables.principalColor};
  font-size: 35px;
  font-family: ${Variables.secondaryFont};
  width: auto;
  text-align: center;
  margin: 0;
  margin-bottom: 10%;
  padding: 0;
  border-bottom: 1px solid ${Variables.principalColor};
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

const StyledLabel = styled.label`
  color: ${Variables.principalColor};
  margin-left: 10px;
  margin-bottom: 3px;
`;

const StyledField = styled(Field)`
  height: 40%;
  width: 100%;

  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const StyledTextArea = styled(Field)`
  height: 10%;
  min-height: 10%;
  max-height: 30%;
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const StyledErrorMsj = styled.p`
  color: red;
  margin: 0;
  padding: 0;
  position: absolute;
  margin-top: -28px;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

const StyledBtn = styled.button`
  ${GlobalStyles.button}
  height: 40%;
  width: 40%;
  font-family: ${Variables.secondaryFont};

  border: none;

  &:hover {
    cursor: pointer;
  }
`;
