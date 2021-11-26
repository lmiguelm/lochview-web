import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useTheme } from 'styled-components';

import { Button, Container } from './styles';

export function Header() {
  const { colors } = useTheme();

  const formatedDate = format(new Date(), 'PPP', { locale: ptBR });

  return (
    <Container>
      <span>{formatedDate}</span>

      <Button>
        <FiLogOut size={24} color={colors.light} />
      </Button>
    </Container>
  );
}
