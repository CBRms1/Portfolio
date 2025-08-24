import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'ADLaM Display', system-ui;
        margin: 0;
        padding: 0;
    }

    .text-primary-color {
        color: #222222;
    }

    .text-secondary-color {
        color: #537b2f;
    }

    .text-primary-hover:hover {
        color: #537b2f !important;
    }

    .text-secondary-hover:hover {
        color: #142c14 !important;
    }

    .nav-link:focus {
        color: #537b2f !important;
    }

    .card-background-color {
        background-color: #00ffff !important;
    }
`