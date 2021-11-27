import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

type User = {
  id: string;
  email: string;
  nome: string;
  tipo: string;
};

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get<User[]>('/users');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

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
