import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherDataState, WeatherData } from "./types"
import axios from "axios"
import { v4 } from "uuid"

const weatherInitialState: WeatherDataState = {
  weather: undefined,
  allWeather: [],
  error: undefined,
  isFetching: false,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (payload: any) => {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${payload.city}&appid=c1bd94c6a4c59ccf8f89d76db9d14b41`,
        )
        console.log("Response:", response)
        return response
      },
      {
        pending: (state: WeatherDataState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: WeatherDataState, action) => {
          state.isFetching = false
          // state.weather = [...state.weather]
          state.weather = {
            city: action.payload.data.name,
            imgURL: `http://openweathermap.org/img/w/${action.payload.data.weather[0].icon}.png`,
            temperature: `${Math.round(action.payload.data.main.temp - 272.15)}°C`,
            id: v4(),
          }
        },
        rejected: (state: WeatherDataState, action) => {
          state.isFetching = false
          state.error = action.error.message
          state.weather = undefined
        },
      },
    ),
    saveCard: create.reducer((state: WeatherDataState) => {
      if (state.weather) {
        state.allWeather = [...state.allWeather, state.weather]
      }
    }),
    deleteCardWeather: create.reducer(
      (state: WeatherDataState, action: PayloadAction<string>) => {
        state.allWeather = state.allWeather.filter((weather) => {
          return weather.id !== action.payload
        })
      },
    ),
    deleteCardHomePage: create.reducer(
      (state: WeatherDataState)=>{
        state.weather = undefined
        state.error = undefined
      },
    ),
    deleteAllcards: create.reducer(() => weatherInitialState),

  }),
  selectors: {
    weatherData: (state: WeatherDataState) => state.weather,
    error: (state: WeatherDataState) => state.error,
    isFetching: (state: WeatherDataState) => state.isFetching,
    allWeather: (state: WeatherDataState) => state.allWeather
  },
})

export const weatherActions = weatherSlice.actions

export const weatherSelectors = weatherSlice.selectors
