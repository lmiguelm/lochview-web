import React, { useState, useCallback, createContext, ReactNode } from 'react';
import { api } from '../services/api';

type AuthContextData = {
  isLogged: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type IResponseLogin = {
  access_token: string;
};

export const AuthContext = createContext({} as AuthContextData);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const { data } = await api.post<IResponseLogin>('/users/login', {
          email,
          senha: password,
        });

        const token = `Bearer ${data.access_token}`;

        setIsLogged(true);
        setToken(token);

        api.defaults.headers.common['Authorization'] = token;
      } catch (error) {
        console.log(error);
      }
    },
    [isLogged, token]
  );

  const signOut = useCallback(async () => {
    setIsLogged(false);
    setToken(null);
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}
