


export interface WeatherData {
    id: string;
    imgURL: string;
    nameOfCity:string;
    temp: string;
}

export interface WeatherDataState{
    weather: WeatherData[];
    error: string | undefined;
    isFetching: boolean;
}

    