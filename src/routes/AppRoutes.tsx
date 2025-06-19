import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const AppRoutes = () => {
  const routing = useRoutes([...MainRoutes]);
  return routing;
};

export default AppRoutes;
