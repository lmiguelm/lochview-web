import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

import { Container } from '../styles/pages/usuarios';

type User = {
  id: string;
  email: string;
  nome: string;
  tipo: string;
};

export default function Usuarios() {
  const { push } = useRouter();
  const { isLogged, signOut } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !isLogged && push('signin');
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get<User[]>('/users');
        setUsers(response.data);
        setLoading(false);
      } catch {
        await signOut();
        push('dashboard');
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <Container>
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
function signOut() {
  throw new Error('Function not implemented.');
}
