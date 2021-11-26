import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
`;

export const Content = styled.main`
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 30px;
`;

export const Form = styled.div`
  flex: 1;
  width: 50%;
  min-width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
