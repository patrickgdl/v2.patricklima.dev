import { styled } from '@/stitches.config';
import { Box } from '@common/components/Box';
import { Flex } from '@common/components/Flex';
import { Stack } from '@common/components/Stack';
import { Text } from '@common/components/Text';
import * as React from 'react';
import { Brazil } from '../Brazil';

export const Footer = (): JSX.Element => {
  return (
    <Box as='footer' css={{ pt: '$2xl', pb: '$m', '@bp1': { pb: '$xl' } }}>
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

      <Stack
        gap='2xs'
        css={{
          ta: 'left',
        }}
      >
        <Flex direction='row' align='end' justify='between'>
          <Flex direction='column'>
            <Text leading='tight' color='2' css={{ pt: '$xs' }} size='1'>
              Araucária, PR - Brazil
            </Text>
          </Flex>

          <Box>
            <Brazil /> <Time />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

const Dot = styled('div', {
  backgroundColor: '$slate11',
  width: 2,
  height: 2,
  borderRadius: '$round',
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
    <Text
      color='2'
      leading='tight'
      size='1'
      dateTime={currentTime.twentyFour}
      as='time'
    >
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
