import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: role, isLoading: isInstructor = [] } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`)
            console.log('is instru res', res)
            return res.json();
        },
      })

      return [role?.instructor, refetch, isInstructor]
};

export default useInstructor;