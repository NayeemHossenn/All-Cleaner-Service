import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllService/AllServices";
import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
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
    ],
  },
]);
export default router;
