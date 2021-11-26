import React, { ButtonHTMLAttributes } from 'react';

import { FiUser, FiCalendar } from 'react-icons/fi';
import { HiDocumentReport } from 'react-icons/hi';
import { FaBed } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: 'clientes' | 'reservas' | 'quartos' | 'relatórios';
};

export function Card({ title, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container>
      {title === 'clientes' && <FiUser size={75} color={colors.primary} />}
      {title === 'reservas' && <FiCalendar size={75} color={colors.primary} />}
      {title === 'relatórios' && <HiDocumentReport size={75} color={colors.primary} />}
      {title === 'quartos' && <FaBed size={75} color={colors.primary} />}

      <Title>{title}</Title>
    </Container>
  );
}
