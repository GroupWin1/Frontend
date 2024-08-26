import { useEffect, useState } from "react";
import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { WeatherModel } from "../models/weather-model";
import useFetchData, { useFetchData3 } from "../Hooks/Base";
import useFetchWeather from "../Hooks/Weather";

const WeatherList = () => {
    // const weathers = useFetchWeather();
    // const { weathers } = useFetchData();
    const {weathers4, errormodel} = useQuery<WeatherModel[], AxiosError>({
        queryKey: ["weathers4"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/WeatherForecast`).then((resp) => resp.data)
    });
    const test = weathers4;
    const {weathers2} = useFetchData3();
    const weathers = useFetchData();
    const {weathers3} = useFetchData3();

    return (<div>
        <div>
            <h5>Weather list here hehe</h5>
        </div>
        <table>
            <thead>
                <tr>
                    <th>date</th>
                    <th>temperatureC</th>
                    <th>summary</th>
                </tr>
            </thead>
            <tbody>
                {weathers && weathers.map((i: WeatherModel) => (
                    <tr key={i.id}>
                        <td>{i.date.toString()}</td>
                        <td>{i.temperatureC}</td>
                        <td>{i.summary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);

}

export default WeatherList;