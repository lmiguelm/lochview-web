import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return <Container {...rest}>{title}</Container>;
}
