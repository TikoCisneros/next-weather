import WeatherForm from '@/components/WeatherForm';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();
  const handleGetWeatherClick = (cityName: string) => push(`/weather/${cityName}`);

  return <WeatherForm onGetWeatherClick={handleGetWeatherClick} />;
}
