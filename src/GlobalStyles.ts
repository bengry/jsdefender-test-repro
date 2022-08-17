import { createGlobalStyle } from "styled-components";

export const myClass = "my-class";

export const GlobalStyles = createGlobalStyle`
    .${myClass} {
        color: red;
    }
`;
