import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: ${({ theme }) => theme.colors.background};

  padding: 60px;

  main {
    height: 100%;
    width: 100%;

    background: ${({ theme }) => theme.colors.light};

    display: flex;
    align-items: center;
    flex-direction: column;

    table {
      width: 100%;

      thead {
      }

      tr {
        background-color: ${({ theme }) => theme.colors.background};
        &:nth-child(2n) {
          background-color: ${({ theme }) => theme.colors.light_dark};
        }

        th {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
          padding: 15px;
        }

        td {
          padding-left: 30px;
          padding: 15px;
        }
      }
    }
  }
`;
