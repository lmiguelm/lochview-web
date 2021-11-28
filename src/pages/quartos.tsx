import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';

import { Container } from '../styles/pages/quartos';

type Quarto = {
  id: string;
  titulo: string;
  descricao: string;
  imagens: {
    id: string;
    url: string;
  }[];
};

export default function Quartos() {
  const { push } = useRouter();
  const { isLogged, signOut } = useAuth();

  const [quartos, setQuartos] = useState<Quarto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !isLogged && push('signin');
  }, []);

  useEffect(() => {
    async function fetchQuartos() {
      try {
        const response = await api.get<Quarto[]>('/rooms');
        setQuartos(response.data);
        setLoading(false);
      } catch {
        await signOut();
        push('dashboard');
      }
    }
    fetchQuartos();
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
              <th>Quarto</th>
              <th>Título</th>
              <th>Descrição</th>
            </tr>
          </thead>

          <tbody>
            {quartos.map((quarto) => (
              <tr key={quarto.id}>
                <td>{quarto.id}</td>
                <td>
                  <img src={quarto.imagens[0].url} alt={quarto.titulo} />
                </td>
                <td>{quarto.titulo}</td>
                <td>{quarto.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
