import { lightTheme } from '@/stitches.config';
import '@/styles/global.scss';
import { RootLayout } from '@common/components/layout/RootLayout';
import { useVisualViewportHeight } from '@common/hooks/use-visual-viewport-height';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useVisualViewportHeight();

  return (
    <>
      <Script async src='https://cdn.splitbee.io/sb.js' />

      <ThemeProvider
        disableTransitionOnChange
        attribute='class'
        value={{ dark: 'dark-theme', light: lightTheme.className }}
        defaultTheme='system'
      >
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>

      {/* texture effect, props to https://ped.ro website */}
      <svg id='texture'>
        <filter id='noise'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='.8'
            numOctaves='4'
            stitchTiles='stitch'
          ></feTurbulence>
          <feColorMatrix type='saturate' values='0'></feColorMatrix>
        </filter>
        <rect width='100%' height='100%' filter='url(#noise)'></rect>
      </svg>
    </>
  );
};
export default MyApp;
