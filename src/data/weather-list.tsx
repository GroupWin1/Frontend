import { useEffect, useState } from "react";
import config, { currencyFormatter } from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { WeatherModel } from "../models/weather-model";
import useFetchData, { useFetchData3 } from "../Hooks/Base";
import useFetchWeather from "../Hooks/Weather";
import { Format_ddMMyyyy } from "../Utls/DateComponent";

const WeatherList = () => {
    const weathers = useFetchWeather();

    return (
        <div>
            <div className="row mb-2">
                <h4 className="themeFontColor text-center">Weather list here hehe</h4>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>TemperatureC</th>
                        <th>Summary</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {weathers && weathers.map((i: WeatherModel) => (
                        <tr key={i.id}>
                            <td>{Format_ddMMyyyy(i.date)}</td>
                            <td>{i.temperatureC}</td>
                            <td>{i.summary}</td>
                            <td>{currencyFormatter.format(i.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default WeatherList;