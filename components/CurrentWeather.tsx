import { WeatherData } from '@/models/weather';
import { Group, Paper, Text } from '@mantine/core';
import Image from 'next/image';

type CurrentWeatherProps = {
  weatherData: WeatherData;
};

const CurrentWeather = ({ weatherData }: CurrentWeatherProps) => {
  const {
    name,
    weather,
    main: { temp },
  } = weatherData;
  return (
    <Paper mt='xs' p='lg' withBorder>
      <Group position='left'>
        <Text>{name} Weather</Text>
      </Group>
      <Group position='left'>
        <Image
          alt={`weather-${name.toLocaleLowerCase()}`}
          src={`${process.env.NEXT_PUBLIC_BASE_ICON_URL}${weather[0].icon}@4x.png`}
          width={200}
          height={200}
        />
        <Text size='lg' weight={600}>
          Currently {temp} &deg;C
        </Text>
      </Group>
    </Paper>
  );
};

export default CurrentWeather;
