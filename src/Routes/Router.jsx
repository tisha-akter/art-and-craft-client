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
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'add-class',
          element: <AddClass></AddClass>
        }

       
      ]
    },

    {
      path: '*',
      element: <Error></Error>
    }

  ]);