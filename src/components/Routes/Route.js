import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Registration from "../../pages/Registration/Registration";
import CategorDetails from "../Category-details/CategorDetails";
import Checkout from "../Category/Checkout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <CategorDetails></CategorDetails>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);

export default router;
