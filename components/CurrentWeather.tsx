import { WeatherData } from '@/models/weather';
import { Group, Text } from '@mantine/core';
import Image from 'next/image';

import Container from './Container';

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
    <>
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
    </>
  );
};

export default CurrentWeather;
