import { useEffect, useState} from "react"

export interface UseEffectProps {
    url: string
}

export const useFetch = <T> ({url}: UseEffectProps) => {

    const [data, setData] = useState<T | null>(null);
    const [hasError, sethasError] = useState (false);

    const fetchData = async (e?: React.FormEvent<HTMLFormmElement>) => {

        e?. preventDefault();

        setIsFetching(true);

    try {
         const response = await fetch (url);
         const dataBuffer  = await response.json ();
         setData (dataBuffer);
         setisFetching(false);
    } catch (e) {
        sethasError(true);
        setIsFetching(false);
    }
    }








}