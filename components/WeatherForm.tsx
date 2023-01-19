import { Group, Text, TextInput, Button } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import Container from './Container';

type WeatherFormProps = {
  onGetWeatherClick: (cityName: string) => void;
};

const WeatherForm = ({ onGetWeatherClick }: WeatherFormProps) => {
  const [cityInput, setCityInput] = useState('');

  const handleCityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setCityInput(value);
  };

  const handleGetWeatherClick = () => onGetWeatherClick(cityInput);

  return (
    <Container>
      <Group position='apart'>
        <Text size='xl' weight={600}>
          Get the Weather!
        </Text>
      </Group>
      <Group position='apart'>
        <Text size='lg'>Enter the city and get the weather below!</Text>
      </Group>
      <Group position='apart' my='sm'>
        <TextInput
          label='City name'
          placeholder='San Diego'
          onChange={handleCityInputChange}
        />
      </Group>
      <Group position='apart'>
        <Button variant='gradient' onClick={handleGetWeatherClick}>
          Get Weather
        </Button>
      </Group>
    </Container>
  );
};

export default WeatherForm;
