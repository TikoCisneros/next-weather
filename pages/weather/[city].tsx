import { getActualWeatherByCityName } from '@/api/weather';
import Container from '@/components/Container';
import CurrentWeather from '@/components/CurrentWeather';
import { CityParsedUrlQuery } from '@/models/cityPage';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const CityWeatherPage = () => {
  const { query, back } = useRouter();

  const cityName = (query as CityParsedUrlQuery).city;

  const { isLoading, error, data } = useQuery(
    'actualWeather',
    () => getActualWeatherByCityName(cityName),
    { cacheTime: 0 }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + JSON.stringify(error);

  return (
    <Container>
      <CurrentWeather weatherData={data} />
      <Button variant='gradient' onClick={back} mt='xs'>
        Get other city weather
      </Button>
    </Container>
  );
};

export default CityWeatherPage;
