import styled, { css } from "styled-components";

export const List = styled.div`
  ${({ theme }) => css`
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
    }

    > h2 {
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: 12px;
    }
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    padding: 12px 32px;
    height: 40px;
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.primary};
    border-radius: 8px;

    > a {
      color: ${theme.colors.secondary};
    }
  `}
`