import { useEffect, useState } from "react";
import axios from 'axios';


const UseFecthResult = (url) => {
    const resultFecth = {
        data: [],
        loading: true,
        error: null
    }
    const [obj, setObj] = useState(resultFecth);

    useEffect(() => {
        const abortcontroller = new AbortController();
        (async () => {
            try {
                const response = await axios.get(url, {
                    signal: abortcontroller.signal,
                });
                setObj(
                    {
                        data: response.data,
                        loading: false,
                    }
                )

            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    setObj(
                        {
                            error: 'Error loading data.',
                            loading: false,
                        }
                    )
                }
            }

        })();

        return () => {
            abortcontroller.abort();
        };
    }, [url])

    return obj;
}
export default UseFecthResult