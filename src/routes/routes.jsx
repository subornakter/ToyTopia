import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Toys from "../pages/Toys";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin"
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword";
import Store from "../pages/Store";
import Contact from "../pages/Contact";
import AboutUS from "../pages/AboutUS";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
     errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element:<Home/> ,
             loader: () => fetch("/Data.json"),
        },
        {
            path:"/toys",
            element:<Toys/>,
               loader: () => fetch("/Data.json"),
        },
        {
            path:"/contact",
            element: <Contact/>,
          
        },
        {
            path:"/about",
            element: <AboutUS/>,
          
        },
        {
            path:"/profile",
            element:(
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    ),
        },
        {
            path: "/signup",
            element:<Signup/>
        },
        {
            path:"/signin",
            element:<Signin/>
        },
        {
            path:"/store",
            element:(
      <PrivateRoute>
        <Store />
      </PrivateRoute>
            )
        
        },
         {
        path: '/toyDetails/:toyId',
        element: (<PrivateRoute><ToyDetails /></PrivateRoute>),
           loader: () => fetch("/Data.json"),
      },
       { path: "/forget-password", element: <ForgetPassword/> },
    ]
  },
]);