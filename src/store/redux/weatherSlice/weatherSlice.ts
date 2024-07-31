import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherDataState } from "./types"
import axios from "axios"



const weatherInitialState: WeatherDataState = {
  weather: [],
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
          "",
        )
        return response
      },
      {
        pending: (state: WeatherDataState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: WeatherDataState, action) => {
          state.isFetching = false
          state.weather = [
            ...state.weather,
        
          ]
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
    deleteAllJokes: create.reducer(() => weatherInitialState),
  }),
selectors: {
  WeatherData: (state: WeatherDataState) => state.weather,
  error: (state: WeatherDataState) => state.error,
  isFetching: (state: WeatherDataState) => state.isFetching,
},
})

export const jokeActions = weatherSlice.actions

export const jokeSelectors = weatherSlice.selectors
