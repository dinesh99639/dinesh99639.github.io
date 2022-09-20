import { createGlobalStyle } from 'styled-components';

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
`;