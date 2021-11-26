import React from 'react';

import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';

import { Container, Content, Form } from './styles';

import { useTheme } from 'styled-components';

export default function SignIn() {
  const { colors } = useTheme();

  return (
    <Container>
      <Aside />

      <Content>
        <Logo color={colors.primary} />

        <Form>
          <Input placeholder="E-mail" />

          <Input placeholder="Senha" />

          <Button title="Entrar" style={{ marginTop: 30 }} />
        </Form>
      </Content>
    </Container>
  );
}
