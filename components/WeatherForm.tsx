import { Paper, Group, Text, TextInput, Button } from '@mantine/core';

const WeatherForm = () => {
  return (
    <Paper p='lg' withBorder>
      <Group position='apart'>
        <Text size='xl' weight={600}>
          Get the Weather!
        </Text>
      </Group>
      <Group position='apart'>
        <Text size='lg'>Enter the city and get the weather below!</Text>
      </Group>
      <Group position='apart' my='sm'>
        <TextInput label='City name' placeholder='San Diego' />
      </Group>
      <Group position='apart'>
        <Button variant='gradient'>Get Weather</Button>
      </Group>
    </Paper>
  );
};

export default WeatherForm;
