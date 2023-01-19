export const getActualWeatherByCityName = (cityName: string) =>
  fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  ).then((resp) => resp.json());
