import styled from 'styled-components';

type Props = {
  color?: string;
};

export const Logo = styled.span<Props>`
  font-family: 'Indie Flower';
  color: ${({ theme, color }) => (color ? color : theme.colors.light)};
  font-size: 5rem;
  user-select: none;
`;
