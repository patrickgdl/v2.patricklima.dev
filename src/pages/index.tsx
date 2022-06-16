import { styled } from '@/stitches.config';
import { CustomLink } from '@common/components/CustomLink';
import { Flex } from '@common/components/Flex';
import { Grid } from '@common/components/Grid';
import { Stack } from '@common/components/Stack';
import { H1, H2, H3, Link, Paragraph, Text } from '@common/components/Text';
import UpRightArrow from '@common/components/UpRightArrow';
import { PATHS } from '@common/utils/constants/paths.constants';
import {
  parseDateToLongDateString,
  sortMdxDataByDateDesc,
} from '@common/utils/helpers/date.helpers';
import { getAllWritingsData } from '@common/utils/helpers/mdx-data.helpers';
import { getMetaImage } from '@common/utils/helpers/meta-image.helpers';
import { MdxData } from '@common/utils/types/mdx-data';
import { WithChildren } from '@common/utils/types/with-children';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';
import NextLink from 'next/link';

const title = 'Home | Patrick Lima';
const SEO: NextSeoProps = {
  title,
  openGraph: {
    title,
    ...getMetaImage('/images/social-banner.png'),
  },
};

const Index = ({
  featuredWritings,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hasWritings = featuredWritings.length > 0;

  return (
    <>
      <NextSeo {...SEO} />
      <VisuallyHidden.Root>
        <H1>Home</H1>
      </VisuallyHidden.Root>
      <Stack gap='2xl'>
        {/* Intro */}
        <Stack as='section' gap='xl'>
          <Stack gap='m'>
            <Paragraph leading='tight'>Patrick Lima</Paragraph>

            <Paragraph>
              <Text family='serif'>Frontend UI developer </Text>
              interested in design systems, component architectures and
              JavaScript frameworks, specially React and Angular.
            </Paragraph>

            <Paragraph>
              Working as a Tech Engineer at{' '}
              <Link
                target='_blank'
                href={PATHS.c6bankURL}
                rel='noreferrer'
                underline='whileHover'
                color='2'
              >
                C6Bank
              </Link>{' '}
              &mdash; the best digital bank in Brazil.
            </Paragraph>

            <Paragraph>
              In the past I&apos;ve developed at{' '}
              <Link
                target='_blank'
                href={PATHS.picpayURL}
                rel='noreferrer'
                underline='whileHover'
                color='2'
              >
                PicPay
              </Link>{' '}
              and{' '}
              <Link
                target='_blank'
                href={PATHS.madeiramadeiraURL}
                rel='noreferrer'
                underline='whileHover'
                color='2'
              >
                MadeiraMadeira
              </Link>
              .
            </Paragraph>

            <Paragraph>
              Other stuff I&apos;m working on{' '}
              <CustomLink
                data-cy='now-link'
                css={{ color: '2', underline: 'whileHover' }}
                href={PATHS.now}
              >
                now
              </CustomLink>
              .
            </Paragraph>
          </Stack>
        </Stack>

        {/* Writing */}

        {hasWritings ? (
          <Stack as='section' gap='l'>
            <Flex direction='row' justify='between' align='center'>
              <H2 leading='tight'>Writing</H2>
              <Grid
                gap='2xs'
                justify='end'
                align='center'
                css={{ gridTemplateColumns: 'auto auto' }}
              >
                <NextLink href={PATHS.writing} passHref>
                  <Link css={{ d: 'block' }} color='2' size='1' leading='tight'>
                    view all
                  </Link>
                </NextLink>
                <ArrowRightIcon aria-hidden color='var(--colors-slate11)' />
              </Grid>
            </Flex>

            <Stack as='ul' gap='m'>
              {featuredWritings?.map(({ fileName, metaData }) => (
                <StyledListItem key={fileName} as='li'>
                  <div>
                    <NextLink
                      href={`${PATHS.writing}/[slug]`}
                      as={`${PATHS.writing}/${fileName.replace(/\.mdx?$/, '')}`}
                      passHref
                    >
                      <Link size='1'>{metaData?.title}</Link>
                    </NextLink>
                  </div>
                  <Text size='1' as='time' dateTime='2022-01-17'>
                    {parseDateToLongDateString(metaData?.publishDate)}
                  </Text>
                </StyledListItem>
              ))}
            </Stack>
          </Stack>
        ) : null}

        {/* Connect */}

        <Stack as='section' gap='m'>
          <Stack gap='xl'>
            <Paragraph>
              I&apos;m not currently looking for new opportunities, but feel
              free to reach out if you&apos;d like.
            </Paragraph>
            <Stack as='ul' gap='s'>
              <ConnectLinkListItem label='Twitter'>
                <Link
                  target='_blank'
                  href={PATHS.twitter}
                  rel='noreferrer'
                  size='1'
                  color='2'
                  leading='tight'
                  css={{ d: 'inline-block' }}
                >
                  opatrickgdl
                </Link>{' '}
                <UpRightArrow />
              </ConnectLinkListItem>
              <ConnectLinkListItem label='Email'>
                <Link
                  href={PATHS.email}
                  css={{ d: 'inline-block' }}
                  leading='tight'
                  size='1'
                  color='2'
                >
                  patrickgdlima@gmail.com
                </Link>{' '}
                <UpRightArrow />
              </ConnectLinkListItem>
              <ConnectLinkListItem label='Github'>
                <Link
                  css={{ d: 'inline-block' }}
                  target='_blank'
                  href={PATHS.github}
                  rel='noreferrer'
                  size='1'
                  color='2'
                  leading='tight'
                >
                  patrickgdl
                </Link>{' '}
                <UpRightArrow />
              </ConnectLinkListItem>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  featuredWritings: MdxData[];
}> = () => {
  const writingsData = sortMdxDataByDateDesc(getAllWritingsData());

  const featuredWritings: MdxData[] = writingsData
    .filter((writing) => writing?.metaData?.status !== 'draft')
    .filter((writing) => writing?.metaData?.featured);

  return {
    props: { featuredWritings },
  };
};

const StyledListItem = styled(Stack, {
  position: 'relative',
  $$bottom: 'calc((var(--space-m) / 2) * -1)',
  '&:after': {
    content: '',
    width: '$full',
    height: 0,
    borderTop: '1px dashed $slate8',
    position: 'absolute',
    bottom: '$$bottom',
    left: 0,
  },
  defaultVariants: {
    gap: '3xs',
  },
});

interface ConnectLinkListItemProps {
  label: string;
}

const ConnectLinkListItem = ({
  label,
  children,
}: ConnectLinkListItemProps & WithChildren) => {
  return (
    <Grid align='center' as='li' gap='s' columns='3'>
      <H3 size='1' leading='tight'>
        {label}
      </H3>
      <div style={{ gridColumn: '2 / span 2' }}>
        <div>{children}</div>
      </div>
    </Grid>
  );
};

export default Index;
