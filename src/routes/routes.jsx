import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
// import About from "../pages/About";
// import Profile from "../pages/Profile";
// import Signup from "../pages/Signup";
// import Signin from "../pages/Signin"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
        {
            index: true,
            element:<Home/> ,
             loader: () => fetch("/Data.json"),
        },
        {
            path:"/shop",
            element:<Shop/>,
               loader: () => fetch("/Data.json"),
        },
        // {
        //     path:"/profile",
        //     element:<Profile/>
        // },
        // {
        //     path: "/signup",
        //     element:<Signup/>
        // },
        // {
        //     path:"/signin",
        //     element:<Signin/>
        // }

    ]
  },
]);