import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ContactUs from "../pages/RoutingPage/ContactUs";
import AboutUs from "../pages/RoutingPage/AboutUs";
import Login from "../pages/register/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
