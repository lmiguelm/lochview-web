import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Card } from '../components/Card';
import { Header } from '../components/Header';

import { Container, Content } from '../styles/pages/dashboard';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { push } = useRouter();
  const { isLogged } = useAuth();

  useEffect(() => {
    !isLogged && push('signin');
  }, []);

  function handleToClientesScreen() {
    push('usuarios');
  }

  function handleToHospedesScreen() {
    push('reservas');
  }

  function handleToQuartosScreen() {
    push('quartos');
  }

  return (
    <Container>
      <Header />

      <Content>
        <Card title="clientes" onClick={handleToClientesScreen} />
        <Card title="reservas" onClick={handleToHospedesScreen} />
        <Card title="quartos" onClick={handleToQuartosScreen} />
      </Content>
    </Container>
  );
}
