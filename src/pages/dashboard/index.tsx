import React from 'react';
import { useRouter } from 'next/router';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export default function Dashboard() {
  const { push } = useRouter();

  function handleToClientesScreen() {
    push('usuarios');
  }

  return (
    <Container>
      <Header />

      <Content>
        <Card title="clientes" onClick={handleToClientesScreen} />
        <Card title="reservas" />
        <Card title="quartos" />
      </Content>
    </Container>
  );
}
