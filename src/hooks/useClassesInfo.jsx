import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const useClassesInfo = () => {
 
    const {data: classesInfo =[], isLoading: loading} = useQuery({
        queryKey: ['classesInfo'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-scl-server-tisha-akter.vercel.app/classesInfo');
            return res.json();
        }
    })

    return [classesInfo, loading]
};

export default useClassesInfo;



