import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline-color: ${(props) => props.theme.text};
      outline: solid 1px;
    }
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  body, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    background-color: ${(props) => props.theme.button};
  }
`;