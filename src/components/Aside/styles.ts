import styled from 'styled-components';

export const Container = styled.aside`
  background-image: url('/assets/aside.png');
  background-repeat: no-repeat;

  flex: 1;
  height: 100%;
`;

export const BackButton = styled.button`
  margin: 30px;

  border: none;
  border-radius: 8px;

  width: 5rem;
  height: 3.25rem;

  background-color: ${({ theme }) => theme.colors.secondary};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
