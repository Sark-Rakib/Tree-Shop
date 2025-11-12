import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Component/Home.jsx";
import Homes from "./HomePage/Homes.jsx";
import ShowTree from "./HomePage/ShowTree.jsx";
import About from "./Component/About.jsx";
import Login from "./Component/Login.jsx";
import MyProfile from "./Component/MyProfile.jsx";
import Register from "./Component/Register.jsx";
import AuthLayout from "./AuthLayout/AuthLayout.jsx";
import AuthProvider from "./ContextAPI/AuthProvider.jsx";
import PrivateRoute from "./Component/PrivateRoute.jsx";
import ViewDetails from "./Component/ViewDetails.jsx";
import Loader from "./Component/Loader.jsx";
import Error from "./Component/Error.jsx";
import { ToastContainer } from "react-toastify";
import OurServices from "./Component/OurServices.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "",
        Component: Homes,
      },
      {
        path: "/category/:id",
        Component: ShowTree,
        loader: () => fetch("/treeDetails.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/myProfile",
        Component: MyProfile,
      },
      {
        path: "/service",
        Component: OurServices,
      },
    ],
  },
  {
    path: "/tree-details/:id",
    element: (
      <PrivateRoute>
        <ViewDetails></ViewDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/treeDetails.json"),
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
