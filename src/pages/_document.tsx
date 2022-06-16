import { getCssText } from '@/stitches.config';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Newsreader:ital,wght@0,300;0,400;1,300;1,400&display=swap'
            rel='stylesheet'
          ></link>
          <link rel='shortcut icon' href='/favicon.ico' />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
