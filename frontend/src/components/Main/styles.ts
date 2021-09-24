import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 18px 24px;
    display: grid;
    grid-template-columns: 200px 2fr;
  `}
`