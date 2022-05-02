import { styled } from '@/stitches.config';
import { WithChildren } from '@common/utils/types/with-children';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const RootLayout = ({ children }: WithChildren): JSX.Element => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navigation />

      <Container>
        <Wrapper>
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled('div', {
  width: '$full',
  backgroundColor: '$uiBg',
  minHeight: '$screenH',
  d: 'flex',
  ai: 'center',
  flexFlow: 'column',
  height: '$full',
  px: '$m',
  pb: '$l',
});

const Wrapper = styled('div', {
  maxWidth: '$channel',
  width: '$full',
  d: 'flex',
  flexFlow: 'column',
  height: '$full',
  minHeight: '$screenH',
  position: 'relative',
  pt: '$xl',
  zIndex: '$init',
});

const Main = styled('main', {
  flex: '1',
  paddingTop: '$5',
  paddingBottom: '$8',
  zIndex: 1,
});
