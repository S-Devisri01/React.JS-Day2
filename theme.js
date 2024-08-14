// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    customGreen: {
      500: '#38A169', // Custom green color
    },
    customRed: {
      500: '#E53E3E', // Custom red color
    },
  },
});

export default customTheme;
