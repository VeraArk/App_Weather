


export interface WeatherData {
    id: string;
    imgURL: string;
    city:string;
    temperature: string;
}

export interface WeatherDataState{
    weather: WeatherData[];
    error: string | undefined;
    isFetching: boolean;
}

    