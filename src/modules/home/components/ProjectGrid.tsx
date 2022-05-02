import { styled } from '@/stitches.config';
import { Grid } from '@common/components/Grid';
import { LinkOverlay } from '@common/components/LinkBox';
import { H3, Paragraph } from '@common/components/Text';
import { PATHS } from '@common/utils/constants/paths.constants';
import { parseTagsToString } from '@common/utils/helpers/string.helpers';
import {
  ProjectMeta,
  PROJECT_METADATA,
} from '@work/utils/constants/projects.constants';
import NextLink from 'next/link';
import * as React from 'react';

export const ProjectGrid = (): JSX.Element => {
  const projectEntries = Object.entries(PROJECT_METADATA);
  return (
    <Grid as='ul' columns={{ '@initial': '1', '@bp1': '3' }} gap='l'>
      {projectEntries.map(([, client], idx) => (
        <Card key={idx} client={client} />
      ))}
    </Grid>
  );
};

interface CardProps {
  client: ProjectMeta;
}
const Card = ({ client: { tags, client, path } }: CardProps): JSX.Element => {
  const tagsString = parseTagsToString(tags);

  return (
    <CardItem>
      <CardWrapper>
        <NextLink passHref href={`${PATHS.work}/[project]`} as={path}>
          <ProjectLink data-testid={path}>
            <H3 leading='tight' size='1' css={{ pb: '$2xs' }}>
              {client}
            </H3>

            <Paragraph color='2' size='1'>
              {tagsString}
            </Paragraph>
          </ProjectLink>
        </NextLink>
      </CardWrapper>
    </CardItem>
  );
};

const CardItem = styled('li', {
  listStyle: 'none',
});

const CardWrapper = styled('div', {
  display: 'flex',
  height: '$full',
  position: 'relative',

  '@hover': {
    '&:hover::before': {
      opacity: 1,
      backgroundColor: '#8EC5FC',
      backgroundImage: '$uiHoverGradient',
      transition: 'all 333ms',
      transform: 'scale(1)',
    },
  },

  '&:before': {
    content: '',
    display: 'block',
    position: 'absolute',
    zIndex: 0,
    inset: 'calc($xs*-1)',
    opacity: 0,
    padding: '$xs',
    transform: 'scale(0.9)',
  },
});

const ProjectLink = styled(LinkOverlay, {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
  width: '$full',
  height: '$full',
});
