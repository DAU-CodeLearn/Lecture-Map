import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext"
import IndexLayout from "./pages/layout/IndexLayout";
import IndexPage from "./pages/IndexPage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import S06Page from "./pages/S06Page";
import S06Second from "./pages/S06/S06Second";
import S06Sixth from "./pages/S06/S06Sixth";
import S06Layout from "./pages/layout/S06Layout";
import S06C0601 from "./pages/S06/6th/S06C0601";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/one", element: <PageOne /> },
      { path: "/two", element: <PageTwo /> },
      { path: "/three", element: <PageThree /> },
      { path: "/four", element: <PageFour /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/one/S06",
        element: <S06Layout />,
        children: [
          { path: "/one/S06/02", element: <S06Second /> },
          { path: "/one/S06/06", element: <S06Sixth /> },
          { path: "/one/S06/06/0601", element: <S06C0601 /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
