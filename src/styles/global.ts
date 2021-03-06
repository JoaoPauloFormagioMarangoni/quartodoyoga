import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #830985;
        --grey: #202024;
        --background: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`
