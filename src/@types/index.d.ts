import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      title: string;
      text: string;
      text_details: string;
      danger: string;
      success: string;
      light: string;
      light_dark: string;
      overlay: string;
    };
  }
}
