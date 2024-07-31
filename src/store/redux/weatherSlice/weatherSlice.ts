import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherDataState } from "./types"
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

        // id: v4(),
        // city: payload.city,
        // imgUrl: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
        // temperature: response.data.temperature,
      },
      {
        pending: (state: WeatherDataState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: WeatherDataState, action) => {
          state.isFetching = false
          // state.weather = [...state.weather]
          state.weather = {city: action.payload.data.name,
            imgURL:action.payload.data.weather[0].icon, 
            temperature:action.payload.data.main.temp,
          id: v4(), }

          console.log(action)
          
        },
        rejected: (state: WeatherDataState, action) => {
          state.isFetching = false
          state.error = action.error.message
          console.log("rejected", action)
        },
      },
    ),
    deleteCard: create.reducer(
      (state: WeatherDataState, action: PayloadAction<string>) => {
        state.weather = state.weather.filter(() => {})
      },
    ),
    deleteAllcards: create.reducer(() => weatherInitialState),
  }),
  selectors: {
    WeatherData: (state: WeatherDataState) => state.weather,
    error: (state: WeatherDataState) => state.error,
    isFetching: (state: WeatherDataState) => state.isFetching,
  },
})

export const weatherActions = weatherSlice.actions

export const weatherSelectors = weatherSlice.selectors
