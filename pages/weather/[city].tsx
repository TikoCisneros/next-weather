import { getActualWeatherByCityName } from '@/api/weather';
import CurrentWeather from '@/components/CurrentWeather';
import { CityParsedUrlQuery } from '@/models/cityPage';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const CityWeatherPage = () => {
  const { query } = useRouter();

  const cityName = (query as CityParsedUrlQuery).city;

  const { isLoading, error, data } = useQuery(
    'actualWeather',
    () => getActualWeatherByCityName(cityName),
    { cacheTime: 0 }
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + JSON.stringify(error);

  return <CurrentWeather weatherData={data} />;
};

export default CityWeatherPage;
