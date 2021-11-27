import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';

import { Container, Content, Form } from './styles';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
  const { colors } = useTheme();
  const { signIn, isLogged } = useAuth();
  const { push } = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    isLogged && push('dashboard');
  }, []);

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();

    if (!email.trim().length) {
      return alert('E-mail obrigatório!');
    }

    if (!password.trim().length) {
      return alert('Senha obrigatória!');
    }

    try {
      await signIn(email, password);
      push('dashboard');
    } catch {
      alert('Não foi possível fazer login, verifique suas credenciais');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Logo color={colors.primary} />

        <Form onSubmit={handleSignIn}>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-mail"
            type="email"
          />

          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
            type="password"
          />

          <Button title="Entrar" style={{ marginTop: 30 }} />
        </Form>
      </Content>
    </Container>
  );
}
