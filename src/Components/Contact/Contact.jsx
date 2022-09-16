import React from "react";
import styled from "styled-components";
import GlobalStyles from "../../Styles/GlobalStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Alfajores() {
  return (
    <StyledContainer>
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
          nombre: Yup.string().max(15).required("Requerido"),
          apellido: Yup.string().max(15).required("Requerido"),
          email: Yup.string().email().required("Requerido"),
          telefono: Yup.number().max(15).required("Requerido"),
          consulta: Yup.string().max(200).required("Requerido"),
        })}
      >
        <StyledForm>
          <StyledLabel htmlFor="nombre">nombre</StyledLabel>
          <StyledField name="nombre" type="text" />
          <ErrorMessage name="nombre" />

          <StyledLabel htmlFor="apellido">apellido</StyledLabel>
          <StyledField name="apellido" type="text" />
          <ErrorMessage name="apellido" />

          <StyledLabel htmlFor="email">email</StyledLabel>
          <StyledField name="email" type="text" />
          <ErrorMessage name="email" />

          <StyledLabel htmlFor="telefono">telefono</StyledLabel>
          <StyledField name="telefono" type="text" />
          <ErrorMessage name="telefono" />

          <StyledLabel htmlFor="consulta">consulta</StyledLabel>
          <StyledField name="consulta" type="text" />
          <ErrorMessage name="consulta" />

          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
    </StyledContainer>
  );
}

export default Alfajores;

const StyledContainer = styled.div`
  ${GlobalStyles.container}
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 70%;
`;

const StyledLabel = styled.label`
  color: red;
`;

const StyledField = styled(Field)`
  width: 100%;
  flex: 0.5;
`;
