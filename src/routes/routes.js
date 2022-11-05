import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Singin from "../Pages/Login/Singin";
import Singup from "../Pages/Login/Singup";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/singin",
        element: <Singin></Singin>,
      },
      {
        path: "/singup",
        element:<Singup></Singup>
      },
    ],
  },
]);
