import { createBrowserRouter } from "react-router-dom";
import {AuthLayout} from '../layouts/auth-layout'
import { MainLayout } from "../layouts/main-layout";

const routes = [
  {
    path: "/",
    element: <MainLayout />
  },
  {
    path: "/login",
    element: <AuthLayout />
  }
];

export const router = createBrowserRouter(routes);
