import { styled } from '@/stitches.config';
import { Box } from '@common/components/Box';
import { LinkBox, LinkOverlay } from '@common/components/LinkBox';
import {
  ScrollContainerArea,
  ScrollContainerScrollbar,
  ScrollContainerThumb,
  ScrollContainerViewport,
} from '@common/components/ScrollContainer';
import { Stack } from '@common/components/Stack';
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
    <ScrollContainerArea>
      <ScrollContainerScrollbar orientation='horizontal'>
        <ScrollContainerThumb />
      </ScrollContainerScrollbar>
      <ScrollContainerViewport>
        <Stack gap='s' direction='row'>
          {projectEntries.map(([, client], idx) => (
            <Card key={idx} client={client} />
          ))}
        </Stack>
      </ScrollContainerViewport>
    </ScrollContainerArea>
  );
};

interface CardProps {
  client: ProjectMeta;
}
const Card = ({
  client: { tags, client, path, images },
}: CardProps): JSX.Element => {
  const tagsString = parseTagsToString(tags);
  const [, image] = images;

  return (
    <Box
      css={{
        minWidth: '90%',
        '@bp1': {
          minWidth: '45%',
        },
        '@bp2': {
          minWidth: 220,
        },
      }}
    >
      <LinkBox>
        <Stack gap='xs'>
          <Box css={{ px: '$m' }}>
            <NextLink passHref href={`${PATHS.work}/[project]`} as={path}>
              <LinkOverlay
                data-testid={path}
                style={{ display: 'inline-block' }}
              >
                <H3 leading='tight' size='1' css={{ pb: '$2xs' }}>
                  {client}
                </H3>
              </LinkOverlay>
            </NextLink>
            <Paragraph color='2' size='1'>
              {tagsString}
            </Paragraph>
          </Box>
        </Stack>
      </LinkBox>
    </Box>
  );
};

const ProjectImageContainer = styled('div', {
  overflow: 'hidden',
  borderRadius: '15px',
  backgroundColor: '$slate8',
});
