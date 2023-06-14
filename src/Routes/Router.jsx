import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../../Error";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";


import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyAddedClasses from "../Pages/Dashboard/MyAddedClasses/MyAddedClasses";
import UpdateAddedClass from "../Pages/Dashboard/MyAddedClasses/UpdateAddedClass/UpdateAddedClass";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";


  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        }
      ]
      
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'my-selected-class',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: 'enrolled-classes',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'manage-classes',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'add-class',
          element: <AddClass></AddClass>
        },
        {
          path: 'my-added-classes',
          element: <MyAddedClasses></MyAddedClasses>
        },
        {
          path: 'update-class/:id',
          element: <UpdateAddedClass></UpdateAddedClass>,
          loader: ({params}) => fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/classesInfo/update/${params.id}`)
        }

       
      ]
    },

    {
      path: '*',
      element: <Error></Error>
    }

  ]);