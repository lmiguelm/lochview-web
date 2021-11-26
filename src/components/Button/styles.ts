import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  height: 85px;
  width: 100%;

  font-size: 16px;

  border: none;
  border-radius: 8px;
`;
