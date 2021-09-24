import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 620px;
    height: 100%;
    margin: 36px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 160px;
    padding: 16px 32px;
    margin-bottom: 56px;

    display: flex;
    align-items: center;

    position: relative;

    border-radius: 14px;
    background-color: ${theme.colors.tertiary};

    & > img {
      position: absolute;
      bottom: 0;
      right: 54px;
    } 
  `}
`

export const UserName = styled.p`
  ${({ theme }) => css`
    width: auto;
    padding: 6px 12px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    border-radius: 8px;
  `}
`

export const List = styled.div`
  ${({ theme }) => css`
    width: 100%;

    > h2 {
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: 12px;
    }
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