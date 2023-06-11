import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
  

    const { refetch, data: classCart = [] } = useQuery({
        queryKey: ['classCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
            return res.json();
        },
      })

      return [classCart, refetch]
    
};

export default useSelectedClass;


