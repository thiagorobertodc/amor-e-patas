import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router.config";

const Routes = () => useRoutes(routes);
const RouterView = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default RouterView;
