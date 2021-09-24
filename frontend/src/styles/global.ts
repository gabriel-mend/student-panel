import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; */
    }
    
    html,
    body,
    #__next {
      height: 100%;
      font-family: 'Baloo Bhaina 2', cursive;
    }

    a {
      text-decoration: none;
    }
      
    html {
      scroll-behavior: smooth;
    }
  `}
`