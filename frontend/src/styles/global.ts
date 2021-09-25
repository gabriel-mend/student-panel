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
    
    ::-webkit-scrollbar{
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-thumb{
      background: #000000;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: #9E9E9E;
    }
    ::-webkit-scrollbar-track{
      background: #FFFFFF;
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    }
  `}
`