import { InputHTMLAttributes } from 'react';
import { Container } from './stlyes';

type Props = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...rest }: Props) {
  return <Container {...rest} />;
}
