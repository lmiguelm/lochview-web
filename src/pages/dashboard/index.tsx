import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />

      <Content>
        <Card title="clientes" />
        <Card title="reservas" />
        <Card title="quartos" />
      </Content>
    </Container>
  );
}
