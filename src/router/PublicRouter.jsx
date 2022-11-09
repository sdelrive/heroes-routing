import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  //   const { pathname, search } = useLocation();
  //   localStorage.setItem("lastPath", lastPath);

  return !logged ? children : <Navigate to="/marvel" />;
};

export default PublicRouter;
