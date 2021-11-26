import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 60px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
