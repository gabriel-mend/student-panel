import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0px 84px;
  `}
`

export const Back = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    line-height: 100%;
    cursor: pointer;
    margin-bottom: 32px;

    > img {
      margin-right: 10px;
    }
  `}
`