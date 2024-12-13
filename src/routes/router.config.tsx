import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import BasicLayout from "../components/BasicLayout";
import * as path from "./path";

const Home = lazy(() => import("../pages/Home/Home"));

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
];

export default routes;
