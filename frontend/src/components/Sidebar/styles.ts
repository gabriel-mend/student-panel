import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 18px 22px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    border-radius: 24px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: ${theme.colors.primary};
  `}
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    font-size: 64px;
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const MenuLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column; 
  `}
`

export const MenuLink = styled.div`
  ${({ theme }) => css`
    & a {
      display: flex;
      align-items: flex-end;
      margin-top: 46px;
      
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.bold};
      line-height: ${theme.font.sizes.medium};
      color: ${theme.colors.secondary};
    }

    & img {
      height: 26px;
      margin-right: 12px;
    }
  `}
`