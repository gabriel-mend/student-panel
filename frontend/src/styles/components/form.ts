import styled, { css, ThemeContext } from "styled-components";

export const FormCreate = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 42px;

    > button {
      margin-top: auto;
      height: 60px;
      border-radius: 8px;
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.balooBhaina2};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.primary};
      border: 0;
      cursor: pointer;
    }
  `}
`

export const Input = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > label {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.bold};
      margin-bottom: 12px;
    }

    > input {
      height: 48px;
      padding: 0 20px;
      border-radius: 8px;
      background-color: ${theme.colors.tertiary};
      border: 0;
      cursor: pointer;
    }

    > select {
      height: 48px;
      padding: 0 20px;
      border-radius: 8px;
      background-color: ${theme.colors.tertiary};
      border: 0;
      cursor: pointer;
    }
  `}
`