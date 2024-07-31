export interface WeatherData {
  id: string 
  imgURL: string | undefined
  city: string | undefined
  temperature: string | undefined
}

export interface WeatherDataState {
  weather: WeatherData | undefined
  allWeather: WeatherData[]
  error: string | undefined
  isFetching: boolean
}
