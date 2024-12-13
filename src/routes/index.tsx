import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Loading from "../components/Loading";
import routes from "./router.config";

const Routes = () => useRoutes(routes);
const RouterView = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterView;
