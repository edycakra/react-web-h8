import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetcher(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //CREATED
    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(({ data }) => {
                setData(data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return [data, loading, error]
}
