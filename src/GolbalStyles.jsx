import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: content-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        transition: all 0.3s ease-in-out;
        overflow-y: overlay;
    }

    .noOverflow {
        overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
    }

    .main-header {
        background-color: ${({ theme }) => theme.header.backgroundColor};
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px 0px !important;
    }

    @media only screen and (max-width: 833.3px) {
        .basicDetails {
            width: 100%;
            text-align: center;
        }

        .basicDetails .about {
            text-align: center;
        }
        
        .terminal {
            width: 100%;
            text-align: center;
            margin: 10px auto;
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }   
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 25px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    .resume {
        background-color: ${({ theme }) => theme.backgroundColor};
        transition: all 0.3s ease-in-out;
        opacity: 0.95;
    }
`;
