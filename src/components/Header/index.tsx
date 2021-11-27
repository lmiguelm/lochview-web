import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useTheme } from 'styled-components';

import { Button, Container } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';

export function Header() {
  const { colors } = useTheme();
  const { signOut } = useAuth();
  const { push } = useRouter();

  const formatedDate = format(new Date(), 'PPP', { locale: ptBR });

  async function handleSignOut() {
    await signOut();
    push('signin');
  }

  return (
    <Container>
      <span>{formatedDate}</span>

      <Button onClick={handleSignOut}>
        <FiLogOut size={24} color={colors.light} />
      </Button>
    </Container>
  );
}
