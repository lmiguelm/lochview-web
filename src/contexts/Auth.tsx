import React, { useState, useCallback, createContext, ReactNode, useEffect } from 'react';
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

  useEffect(() => {
    const token = localStorage.getItem('@lochview:token');

    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setToken(token);
      setIsLogged(true);
    }
  }, []);

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

        localStorage.setItem('@lochview:token', token);

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
    api.defaults.headers.common['Authorization'] = null;
    localStorage.clear();
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}
