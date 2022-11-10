import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About from "../Pages/Blogs/About";
import Blogs from "../Pages/Blogs/Blogs";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Update from "../Pages/Reviews/Update";
import AddService from "../Pages/Services/AddService";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://wild-life-photography-server.vercel.app/home"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://wild-life-photography-server.vercel.app/services"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://wild-life-photography-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://wild-life-photography-server.vercel.app/edit/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
