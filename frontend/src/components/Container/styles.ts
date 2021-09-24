import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
  `}
`