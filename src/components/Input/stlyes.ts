import styled from 'styled-components';

export const Container = styled.input`
  height: 85px;
  width: 100%;

  border-radius: 8px;

  padding: 30px;

  border: none;
  border: 1px solid ${({ theme }) => theme.colors.light_dark};

  margin-bottom: 10px;

  font-size: 16px;
`;
