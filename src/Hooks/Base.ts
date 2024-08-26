import { useEffect, useState } from "react";
import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { WeatherModel } from "../models/weather-model";

const useFetchData = () => {
    const { data } = useQuery<WeatherModel[], AxiosError>({
        queryKey: ["weathers1"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/WeatherForecast`).then((resp) => resp.data)
    });
    return data;
    // return useQuery<WeatherModel[], AxiosError>({
    //     queryKey: ["weathers"],
    //     queryFn: () =>
    //         axios.get(`${config.baseApiUrl}/WeatherForecast`).then((resp) => resp.data)
    // });
}
export const useFetchData2 = () => {
    const { data, error } = useQuery<WeatherModel[], AxiosError>({
        queryKey: ["weathers2"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/WeatherForecast`).then((resp) => resp.data)
    });
    return { data, error };
}
export const useFetchData3 = () => {
    return useQuery<WeatherModel[], AxiosError>({
        queryKey: ["weathers3"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/WeatherForecast`).then((resp) => resp.data)
    });
}
// function useFetchData<T>(apiRoute: string) {
//     const [data, setWeathers] = useState<T[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 var url = `${config.baseApiUrl}/${apiRoute}`;
//                 const rsp = await fetch(url);
//                 if (!rsp.ok) {
//                     throw new Error(`HTTP error! status: ${rsp.status}`);
//                 }
//                 const rspData = await rsp.json();
//                 setWeathers(rspData);
//             } catch (error) {
//                 console.error("Failed to fetch weather data:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     return data;
// }

export default useFetchData;