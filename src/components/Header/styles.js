import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.headerBackgroundColor};
    padding: 0 ${`${theme.spacing.large}px`};
    border-radius: ${theme.borderRadius};
  `}
  
  height: 100px;
  display: flex;
  align-items: center;
  
  justify-content: space-between;

  button {
    font-size: 16px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
