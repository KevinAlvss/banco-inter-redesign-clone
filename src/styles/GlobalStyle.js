import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    body, html{
        font-family: 'Inter', sans-serif;
        background-color: #F5F6FA;
    }

    button{
        cursor: pointer;
    }

    button, input{
        border: none;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
`;