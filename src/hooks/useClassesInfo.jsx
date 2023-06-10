import { useEffect, useState } from "react";

const useClassesInfo = () => {
    const [classesInfo, setClassesInfo] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/classesInfo')
            .then(res => res.json())
            .then(data =>{ 
                setClassesInfo(data)
                setLoading(false);
            });

    }, [])

    return [classesInfo, loading]
};

export default useClassesInfo;



