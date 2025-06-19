
import type { RouteObject } from "react-router-dom";
import Login from "../features/auth/login";
import Register from "../features/auth/register";

const MainRoutes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default MainRoutes;
