//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const customPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '#e0f2ff',
        100: '#b3e0ff',
        200: '#80cdff',
        300: '#4dbaff',
        400: '#26aaff',
        500: '#0099ff',
        600: '#008ae6',
        700: '#007acc',
        800: '#006bb3',
        900: '#005c99',
        950: '#003d66',
      },
      colorScheme: {
        light: {
          primary: {
            color: '#006bb3', // light blue
            inverseColor: '#ffffff',
            hoverColor: '#005c99',
            activeColor: '#006bb3',
          },
          highlight: {
            background: '#003d66',
            focusBackground: '#007acc',
            color: '#ffffff',
            focusColor: '#ffffff',
          },
        },
        dark: {
          primary: {
            color: '#e0f2ff', // soft light blue on black
            inverseColor: '#000000',
            hoverColor: '#b3e0ff',
            activeColor: '#80cdff',
          },
          highlight: {
            background: 'rgba(0, 0, 0, 0.16)',
            focusBackground: 'rgba(0, 0, 0, 0.24)',
            color: 'rgba(255, 255, 255, 0.87)',
            focusColor: 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
    },
  });
  