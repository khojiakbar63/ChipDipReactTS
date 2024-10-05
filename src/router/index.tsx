import { createBrowserRouter } from "react-router-dom";
import {AuthLayout} from '../layouts/auth-layout'
import { MainLayout } from "../layouts/main-layout";
import { Home, Catalog, Details, Consumables} from '../pages'

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/consumables",
        element: <Consumables />
      }
    ]
  },
  {
    path: "/login",
    element: <AuthLayout />
  }
];

export const router = createBrowserRouter(routes);
