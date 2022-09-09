import { css } from "styled-components";
import Variables from "./Variables";

const GlobalStyles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  a: css`
    text-decoration: none;
    font-weight: 500;
    color: black;
  `,
  button: css`
    width: 30%;
    height: 12%;
    border: 1px solid ${Variables.principalColor};
    border-radius: 25px;
    background-color: ${Variables.secondaryColor};
    transition: all 0.3s ease;
    font-weight: 600;
    color: ${Variables.principalColor};

    &:hover {
      border: 1px solid ${Variables.baseColor};
      background-color: ${Variables.principalColor};
      color: ${Variables.baseColor};
    }
  `,
  fadeInAnimation: css`
    animation: fadeIn 0.5s normal;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,
};

export default GlobalStyles;
