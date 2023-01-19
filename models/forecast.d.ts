// https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={APIKEY}

import { Clouds, Coord, Main, Weather } from './weather';

export interface ForecastData {
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
  city:    City;
}

export interface City {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
  sunrise:    number;
  sunset:     number;
}

export interface List {
  dt:         number;
  main:       Main;
  weather:    Weather[];
  clouds:     Clouds;
  wind:       Wind;
  visibility: number;
  pop:        number;
  sys:        Sys;
  dt_txt:     string;
}

export interface Sys {
  pod: string;
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}
