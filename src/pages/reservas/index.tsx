import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Container } from './styles';
import ptBR from 'date-fns/esm/locale/pt-BR';

type Reserva = {
  id: string;
  valor: string;
  checkIn: string;
  checkOut: string;
  hospede: Hospede;
  quarto: Quarto;
};

type Hospede = {
  nome: string;
};

type Quarto = {
  titulo: string;
};

export default function Reservas() {
  const { push } = useRouter();
  const { isLogged, signOut } = useAuth();

  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !isLogged && push('signin');
  }, []);

  useEffect(() => {
    async function fetchReservas() {
      try {
        const response = await api.get<Reserva[]>('/bookings');
        setReservas(response.data);
        setLoading(false);
      } catch {
        await signOut();
        push('dashboard');
      }
    }
    fetchReservas();
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
              <th>Valor</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Quarto</th>
              <th>Hospede</th>
            </tr>
          </thead>

          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>R$ {reserva.valor}</td>
                <td>
                  {format(new Date(reserva.checkIn), 'dd/MM/yyyy hh:mm:ss', { locale: ptBR })}
                </td>
                <td>
                  {format(new Date(reserva.checkOut), 'dd/MM/yyyy hh:mm:ss', { locale: ptBR })}
                </td>
                <td>{reserva.quarto.titulo}</td>
                <td>{reserva.hospede.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
