import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllService/AllServices";
import ServiceDetails from "../../Pages/AllService/ServiceDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/allservices/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://all-cleaner-service-server.vercel.app/allservices/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
export default router;
