import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import * as path from "./path";

const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/Services/Services"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const routes: RouteObject[] = [
  {
    path: path.HOME,
    element: <BasicLayout />,
    children: [
      {
        path: path.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: path.SERVICES,
    element: <BasicLayout />,
    children: [
      {
        path: path.SERVICES,
        element: <Services />,
      },
    ],
  },
  {
    path: path.BLOG,
    element: <BasicLayout />,
    children: [
      {
        path: path.BLOG,
        element: <Blog />,
      },
    ],
  },
  {
    path: path.CONTACT,
    element: <BasicLayout />,
    children: [
      {
        path: path.CONTACT,
        element: <Contact />,
      },
    ],
  },
];

export default routes;
