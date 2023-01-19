import CurrentWeather from '@/components/CurrentWeather';
import WeatherForm from '@/components/WeatherForm';
import { WeatherData } from '@/models/weather';

import { useState } from 'react';

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleGetWeatherClick = async (cityName: string) => {
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      );
      const data: WeatherData = await resp.json();
      console.log(data);
      if (data.cod !== 200) throw data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WeatherForm onGetWeatherClick={handleGetWeatherClick} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
    </>
  );
}
