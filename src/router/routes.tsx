import { createBrowserRouter } from "react-router";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
