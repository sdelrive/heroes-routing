import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* rutas publicas */}

        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        {/* rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
