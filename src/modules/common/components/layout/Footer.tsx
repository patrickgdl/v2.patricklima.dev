import { styled } from '@/stitches.config';
import { Box } from '@common/components/Box';
import { Flex } from '@common/components/Flex';
import { Grid } from '@common/components/Grid';
import { Stack } from '@common/components/Stack';
import { Text } from '@common/components/Text';
import * as React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <Box as='footer' css={{ pt: '$3xl', pb: '$m', '@bp1': { pb: '$xl' } }}>
      <Stack
        css={{ jc: 'center', pb: '$2xl' }}
        direction='row'
        gap='3xs'
        role='separator'
      >
        <Dot />
        <Dot />
        <Dot />
      </Stack>
      <Wrapper align='end' gap='s' gapY={{ '@initial': 'xl', '@bp1': 's' }}>
        <Stack
          gap='2xs'
          css={{
            ta: 'left',
          }}
        >
          <Time />
          <Text leading='tight' css={{ whiteSpace: 'nowrap' }} size='1'>
            Araucária, PR - Brazil
          </Text>
        </Stack>
        <Flex
          direction='row'
          align='center'
          css={{ justifySelf: 'end', '@bp1': { justifySelf: 'start' } }}
        >
          {/* <Weather /> */}
        </Flex>
        <Text
          size='1'
          leading='tight'
          css={{
            color: '$slate9',
            ta: 'center',
            gridArea: 'c',
            '@bp1': { ta: 'right' },
          }}
        >
          Creating
        </Text>
      </Wrapper>
    </Box>
  );
};

const Dot = styled('div', {
  backgroundColor: '$slate11',
  width: 2,
  height: 2,
  borderRadius: '$round',
});

const Wrapper = styled(Grid, {
  width: '$full',
  gridTemplateAreas: `'a b'
                      'c c'`,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@bp1': {
    gridTemplateAreas: `'a b c'`,
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const Time = (): JSX.Element => {
  const [currentTime, setTime] = React.useState<{
    pretty: string;
    twentyFour: string;
  }>({ pretty: '00:00XX', twentyFour: '00:00' });

  React.useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date().getTime();
      const dcTimePretty = formatter.format(now);
      const dcTimeTwentyFour = formatterTwentyFour.format(now);
      setTime({ pretty: dcTimePretty, twentyFour: dcTimeTwentyFour });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <Text leading='tight' size='1' dateTime={currentTime.twentyFour} as='time'>
      {currentTime.pretty}
    </Text>
  );
};

const formatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  timeStyle: 'short',
});

const formatterTwentyFour = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  timeStyle: 'short',
  hour12: false,
});
