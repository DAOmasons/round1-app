import { Loader, Text, Tooltip, createTheme } from '@mantine/core';
import { RingLoader } from './components/loader/RingLoader';

export const theme = createTheme({
  fontFamily: 'Roboto',
  headings: {
    fontFamily: 'Share Tech',
  },
  defaultRadius: 'md',
  components: {
    ThemeIcon: {
      styles: {
        default: {
          border: 'none',
        },
      },
    },
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        color: 'dark.7',
      },
    }),
    // Text: Text.extend({
    //   defaultProps: {
    //     style: {
    //       wordBreak: 'break-word',
    //       overflowWrap: 'break-word',
    //     },
    //   },
    // }),
  },
  /* Put your mantine theme override here */
});
