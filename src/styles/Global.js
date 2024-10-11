import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'ADLaM Display', system-ui;
        margin: 0;
        padding: 0;
    }

    .text-primary-hover:hover {
        color: #007bff !important;
    }
`