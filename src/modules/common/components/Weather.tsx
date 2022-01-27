import { Box } from '@common/components/Box';
import { Grid } from '@common/components/Grid';
import { Text } from '@common/components/Text';
import Image from 'next/image';

type WeatherProps = {
  description: string;
  icon: Record<string, unknown>;
  temp: number;
};

const Weather = (data: WeatherProps): JSX.Element | null => {
  const { description, icon, temp } = data!;

  // Weather data available
  return (
    <>
      <WeatherIcon description={description} icon={icon} />
      <Text leading='tight' size='1'>
        {tempText(temp)}&deg;C
      </Text>
    </>
  );

  // error handling
  // return (
  //   <Text size='1' leading='tight' css={{ color: '$tomato9' }}>
  //     weather data errored
  //   </Text>
  // );

  // // try to use Suspense
  // return <Text size='1'>loading...</Text>;
};

const WeatherIcon = ({
  description,
  icon,
}: {
  description: string;
  icon: Record<string, unknown>;
}): JSX.Element => {
  return icon ? (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}.png`}
      width='25px'
      aria-hidden
      height='25px'
      alt={description ?? 'weather icon'}
    />
  ) : (
    <Grid aria-hidden center style={{ width: 25 }}>
      <Box
        css={{
          borderRadius: '$round',
          height: 15,
          width: 15,
          backgroundColor: '$text1',
        }}
      />
    </Grid>
  );
};

function tempText(temp: number | undefined): string {
  return temp === undefined ? 'XX' : Math.round(temp).toString();
}
