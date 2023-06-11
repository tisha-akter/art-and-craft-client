import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: role, isLoading: isAdminLoading = [] } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            console.log('is admim res', res)
            return res.json();
        },
      })

      return [role?.admin, refetch, isAdminLoading]
};

export default useAdmin;