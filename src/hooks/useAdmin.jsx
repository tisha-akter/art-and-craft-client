import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: role, isLoading: isAdminLoading = [] } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/admin/${user?.email}`)
            return res.json();
        },
      })

      return [role?.admin, refetch, isAdminLoading]
};

export default useAdmin;