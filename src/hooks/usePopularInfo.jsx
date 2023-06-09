import { useEffect, useState } from "react";

const usePopularInfo = () => {
    const [popularInfo, setPopularInfo] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('popularclass.json')
            .then(res => res.json())
            .then(data =>{ 
                setPopularInfo(data)
                setLoading(false);
            });

    }, [])

    return [popularInfo, loading]
};

export default usePopularInfo;