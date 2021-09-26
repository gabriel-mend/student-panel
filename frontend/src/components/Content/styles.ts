import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 64px;
    overflow-y: scroll;
  `}
`