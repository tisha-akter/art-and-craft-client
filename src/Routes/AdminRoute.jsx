// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAdmin from "../hooks/useAdmin";


// const AdminRoute = ({children}) => {
//     const { user, loading } = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = useAdmin();
//     const location = useLocation();

//     if (loading || isAdminLoading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
//                 </div>
//             </div>
//         );
//     }


//     if (user && isAdmin) {
//         return children;
//     }
//     return <Navigate to="/" state={{ from: location }} replace></Navigate>
// };

// export default AdminRoute;