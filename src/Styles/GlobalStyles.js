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
    border-radius: 25px;
    background-color: ${Variables.secondaryColor};
    transition: all 0.5s ease;
    font-weight: 600;
    color: ${Variables.principalColor};

    &:hover {
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
