import { WeatherModel } from "../models/weather-model";
import useFetchData from "./Base";

const ROUTE_API = "WeatherForecast";

const useFetchWeather = ()=>{
    // return useFetchData<WeatherModel>(ROUTE_API);
    // return useFetchData();
    // useFetchData();
}

export default useFetchWeather;