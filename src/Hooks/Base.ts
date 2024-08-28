import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

function useFetchData<T>(apiRoute: string) {
    return useQuery<T[], AxiosError>({
        queryKey: ["weathers"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/${apiRoute}`).then((resp) => resp.data)
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