import { WeatherModel } from "../models/weather-model";
import useFetchData from "./Base";

const ROUTE_API = "WeatherForecast";

const useFetchWeather = () => {
    const { data } = useFetchData<WeatherModel>(ROUTE_API);
    return data;
}

export default useFetchWeather;