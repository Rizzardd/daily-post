// src/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    backgroundLoginImg: '#8b7af6',  
    backgroundBoxLogin: '#63676f'

  },
});

export default theme;
