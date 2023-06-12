import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: InsRole, isLoading: isInstructorLoading = [] } = useQuery({
        queryKey: ['InsRole', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`)
            return res.json();
        },
      })

      return [InsRole?.instructor, refetch, isInstructorLoading];
};

export default useInstructor;