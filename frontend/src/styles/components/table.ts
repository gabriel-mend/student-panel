import styled, { css } from "styled-components";


export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 64px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.font.weight.bold};
    border-spacing: 0 20px;
    border-collapse: separate;
  `}
`

export const ListItem = styled.tr`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;
    
    background-color: ${theme.colors.tertiary};
    text-align: center;

    td {
      font-size: ${theme.font.sizes.medium};
    }

    td:first-child,
    th:first-child {
      border-radius: 14px 0 0 14px;
    }
    td:last-child,
    th:last-child {
      border-radius: 0 14px 14px 0;
    }
  `}
`

export const ButtonOptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;

    > button {
      width: 40px;
      height: 40px;
      border: 0;
      background-color: ${theme.colors.primary};
      border-radius: 8px;
      cursor: pointer;
      margin-left: 20px;
    }
  `}
`