import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: InsRole, isLoading: isInstructorLoading = [] } = useQuery({
        queryKey: ['InsRole', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/instructor/${user?.email}`)
            return res.json();
        },
      })

      return [InsRole?.instructor, refetch, isInstructorLoading];
};

export default useInstructor;