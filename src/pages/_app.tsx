import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/Auth';

import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
