import { Logo as Name } from './styles';

type Props = {
  color?: string;
};

export function Logo({ color }: Props) {
  return <Name color={color}>LochView</Name>;
}
