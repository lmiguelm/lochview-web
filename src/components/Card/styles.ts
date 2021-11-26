import styled from 'styled-components';

export const Container = styled.button`
  height: 400px;
  width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.light};

  border: none;
  border-radius: 8px;

  margin-left: 15px;
`;

export const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary};

  margin-top: 15px;
`;
