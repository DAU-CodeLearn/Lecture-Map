import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import IndexLayout from "./pages/layout/IndexLayout";
import IndexPage from "./pages/IndexPage";
import MyPage from "./pages/MyPage";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import S06Second from "./pages/S06/S06Second";
import S06Sixth from "./pages/S06/S06Sixth";
import S06Layout from "./pages/layout/S06Layout";
import S06C0601 from "./pages/S06/6th/S06C0601";
import S06C0602 from "./pages/S06/6th/S06C0602";
import S06C0603 from "./pages/S06/6th/S06C0603";
import S06C0604 from "./pages/S06/6th/S06C0604";
import S06C0606 from "./pages/S06/6th/S06C0606";
import S06C0607 from "./pages/S06/6th/S06C0607";
import S06C0608 from "./pages/S06/6th/S06C0608";
import S06C0609 from "./pages/S06/6th/S06C0609";
import S06C0611 from "./pages/S06/6th/S06C0611";
import S06C0633 from "./pages/S06/6th/S06C0633";
import HadanCampusMap from "./pages/HadanCampusMap";
import MyTimeTable from "./pages/MyTimeTable";
import MyPageSideBar from "./components/MyPageSideBar";
import MyPageLayout from "./pages/layout/MyPageLayout";
import MyPageInfo from "./pages/MyPageInfo"
import ChangePassword from "./pages/ChangePassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <IndexLayout />,
    children: [
      { path: "/HadanCampusMap", element: <HadanCampusMap /> },
      {
        element: <MyPageLayout />,
        children: [
          {
            path: "/MyPage",
            element: <MyPage />
          },
          {
            path: "/MyPage/Info",
            element: <MyPageInfo />
          },
          {
            path: "/MyPage/ChangePassword",
            element: <ChangePassword />
          }
        ],
      },
      { path: "/MyTimeTable", element: <MyTimeTable /> },
      { path: "/three", element: <PageThree /> },
      { path: "/four", element: <PageFour /> },
      {
        path: "/HadanCampusMap/S06",
        element: <S06Layout />,
        children: [
          { path: "/HadanCampusMap/S06/02", element: <S06Second /> },
          { path: "/HadanCampusMap/S06/06", element: <S06Sixth /> },
          { path: "/HadanCampusMap/S06/06/0601", element: <S06C0601 /> },
          { path: "/HadanCampusMap/S06/06/0602", element: <S06C0602 /> },
          { path: "/HadanCampusMap/S06/06/0603", element: <S06C0603 /> },
          { path: "/HadanCampusMap/S06/06/0604", element: <S06C0604 /> },
          { path: "/HadanCampusMap/S06/06/0606", element: <S06C0606 /> },
          { path: "/HadanCampusMap/S06/06/0607", element: <S06C0607 /> },
          { path: "/HadanCampusMap/S06/06/0608", element: <S06C0608 /> },
          { path: "/HadanCampusMap/S06/06/0609", element: <S06C0609 /> },
          { path: "/HadanCampusMap/S06/06/0611", element: <S06C0611 /> },
          { path: "/HadanCampusMap/S06/06/0633", element: <S06C0633 /> },
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
