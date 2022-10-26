import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import Login from "../../pages/login/Login";
import Registration from "../../pages/Registration/Registration";
import CategorDetails from "../Category-details/CategorDetails";
import Checkout from "../Category/Checkout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
        path: "/checkout",
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
    ],
  },
]);

export default router;
