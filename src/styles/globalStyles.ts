import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
    }

    body {
        background: var(--background);
    }

    :root {
        --background: #f0f2f5;
        --background2: #F4F4F4;

        --black: #16161B;
        --purple: #491E7C;
        --white: #ffffff;
        --yellow: #FBC105;
    }
`