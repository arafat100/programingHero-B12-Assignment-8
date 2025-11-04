
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import MyInstallation from "../Pages/MyInstallation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "apps",
        element: <AllApps />
      },
      {
        path: "apps/:id",
        element: <AppDetails />
      },
      {
        path: "installation",
        element: <MyInstallation />
      }
    ]
  }
]);

export default router;
