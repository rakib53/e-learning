import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Login from "../../pages/login/Login";
import Registration from "../../pages/Registration/Registration";

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
    ],
  },
]);

export default router;
