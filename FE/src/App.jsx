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
import S06F2 from "./pages/S06/S06F2";
import S06F3 from "./pages/S06/S06F3";
import S06F4 from "./pages/S06/S06F4";
import S06F5 from "./pages/S06/S06F5";
import S06F6 from "./pages/S06/S06F6";
import S06F7 from "./pages/S06/S06F7";
import S06F8 from "./pages/S06/S06F8";
import S06F9 from "./pages/S06/S06F9";
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
import MyPageSideBar from "./components/MyPageSideBar";
import MyPageLayout from "./pages/layout/MyPageLayout";
import MyPageInfo from "./pages/MyPageInfo"
import ChangePassword from "./pages/ChangePassword";
import UserTimeTable from "./pages/UserTimeTable";
import InsertTimeTable from "./pages/InsertTimeTable";
import S06C0302 from "./pages/S06/3rd/S06C0302";
import S06C0308 from "./pages/S06/3rd/S06C0308";
import S06C0319 from "./pages/S06/3rd/S06C0319";
import S06C0320 from "./pages/S06/3rd/S06C0320";
import S06C0321 from "./pages/S06/3rd/S06C0321";
import S06C0322 from "./pages/S06/3rd/S06C0322";
import S06C0401 from "./pages/S06/4th/S06C0401";
import S06C0404 from "./pages/S06/4th/S06C0405";
import S06C0408 from "./pages/S06/4th/S06C0408";
import S06C0409 from "./pages/S06/4th/S06C0409";
import S06C0420 from "./pages/S06/4th/S06C0420";
import S06C0421 from "./pages/S06/4th/S06C0421";
import S06C0424 from "./pages/S06/4th/S06C0424";
import S06C0425 from "./pages/S06/4th/S06C0425";
import S06C0504 from "./pages/S06/5th/S06C0504";
import S06C0505 from "./pages/S06/5th/S06C0505";
import S06C0506 from "./pages/S06/5th/S06C0506";
import S06C0507 from "./pages/S06/5th/S06C0507";
import S06C0508 from "./pages/S06/5th/S06C0508";
import S06C0509 from "./pages/S06/5th/S06C0509";
import S06C0521 from "./pages/S06/5th/S06C0521";
import S06C0528 from "./pages/S06/5th/S06C0528";
import S06C0529 from "./pages/S06/5th/S06C0529";
import S06C0702 from "./pages/S06/7th/S06C0702";
import S06C0703 from "./pages/S06/7th/S06C0703";
import S06C0704 from "./pages/S06/7th/S06C0704";
import S06C0705 from "./pages/S06/7th/S06C0705";
import S06C0708 from "./pages/S06/7th/S06C0708";
import S06C0709 from "./pages/S06/7th/S06C0709";
import S06C0710 from "./pages/S06/7th/S06C0710";
import S06C0713 from "./pages/S06/7th/S06C0713";
import S06C0715 from "./pages/S06/7th/S06C0715";
import S06C0729 from "./pages/S06/7th/S06C0729";
import S06C0730 from "./pages/S06/7th/S06C0730";
import S06C0731 from "./pages/S06/7th/S06C0731";
import S06C0732 from "./pages/S06/7th/S06C0732";
import S06C0733 from "./pages/S06/7th/S06C0733";
import S06C0801 from "./pages/S06/8th/S06C0801";
import S06C0802 from "./pages/S06/8th/S06C0802";
import S06C0803 from "./pages/S06/8th/S06C0803";
import S06C0806 from "./pages/S06/8th/S06C0806";
import S06C0808 from "./pages/S06/8th/S06C0808";
import S06C0809 from "./pages/S06/8th/S06C0809";
import S06C0811 from "./pages/S06/8th/S06C0811";
import S06C0813 from "./pages/S06/8th/S06C0813";
import S06C0815 from "./pages/S06/8th/S06C0815";
import S06C0820 from "./pages/S06/8th/S06C0820";
import S06C0825 from "./pages/S06/8th/S06C0825";
import S06C0827 from "./pages/S06/8th/S06C0827";
import S06C0828 from "./pages/S06/8th/S06C0828";
import S06C0830 from "./pages/S06/8th/S06C0830";
import S06C0831 from "./pages/S06/8th/S06C0831";
import S06C0832 from "./pages/S06/8th/S06C0832";
import S06C0833 from "./pages/S06/8th/S06C0833";
import S06C0835 from "./pages/S06/8th/S06C0835";
import S06C0907 from "./pages/S06/9th/S06C0907";
import S06C0908 from "./pages/S06/9th/S06C0908";
import S06C0921 from "./pages/S06/9th/S06C0921";
import S06C0203 from "./pages/S06/2nd/S06C0203";
import S06C0205 from "./pages/S06/2nd/S06C0205";
import S06C0207 from "./pages/S06/2nd/S06C0207";
import S06C0225 from "./pages/S06/2nd/S06C0225";
import S06C0226 from "./pages/S06/2nd/S06C0226";
import S06C0405 from "./pages/S06/4th/S06C0405";
import S06C0501 from "./pages/S06/5th/S06C0501";
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
        path: "/addTime",
        element: <InsertTimeTable />
      },
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
      { path: "/MyTimeTable", element: <UserTimeTable /> },
      { path: "/three", element: <PageThree /> },
      { path: "/four", element: <PageFour /> },
      {
        path: "/HadanCampusMap/S06",
        element: <S06Layout />,
        children: [
          { path: "/HadanCampusMap/S06/02", element: <S06F2 /> },
          { path: "/HadanCampusMap/S06/03", element: <S06F3 /> },
          { path: "/HadanCampusMap/S06/04", element: <S06F4 /> },
          { path: "/HadanCampusMap/S06/05", element: <S06F5 /> },
          { path: "/HadanCampusMap/S06/06", element: <S06F6 /> },
          { path: "/HadanCampusMap/S06/07", element: <S06F7 /> },
          { path: "/HadanCampusMap/S06/08", element: <S06F8 /> },
          { path: "/HadanCampusMap/S06/09", element: <S06F9 /> },
          { path: "/HadanCampusMap/S06/02/0203", element: <S06C0203 /> },
          { path: "/HadanCampusMap/S06/02/0205", element: <S06C0205 /> },
          { path: "/HadanCampusMap/S06/02/0207", element: <S06C0207 /> },
          { path: "/HadanCampusMap/S06/02/0225", element: <S06C0225 /> },
          { path: "/HadanCampusMap/S06/02/0226", element: <S06C0226 /> },
          { path: "/HadanCampusMap/S06/03/0302", element: <S06C0302 /> },
          { path: "/HadanCampusMap/S06/03/0308", element: <S06C0308 /> },
          { path: "/HadanCampusMap/S06/03/0319", element: <S06C0319 /> },
          { path: "/HadanCampusMap/S06/03/0320", element: <S06C0320 /> },
          { path: "/HadanCampusMap/S06/03/0321", element: <S06C0321 /> },
          { path: "/HadanCampusMap/S06/03/0322", element: <S06C0322 /> },
          { path: "/HadanCampusMap/S06/04/0401", element: <S06C0401 /> },
          { path: "/HadanCampusMap/S06/04/0405", element: <S06C0405 /> },
          { path: "/HadanCampusMap/S06/04/0408", element: <S06C0408 /> },
          { path: "/HadanCampusMap/S06/04/0409", element: <S06C0409 /> },
          { path: "/HadanCampusMap/S06/04/0420", element: <S06C0420 /> },
          { path: "/HadanCampusMap/S06/04/0421", element: <S06C0421 /> },
          { path: "/HadanCampusMap/S06/04/0424", element: <S06C0424 /> },
          { path: "/HadanCampusMap/S06/04/0425", element: <S06C0425 /> },
          { path: "/HadanCampusMap/S06/05/0501", element: <S06C0501 /> },
          { path: "/HadanCampusMap/S06/05/0504", element: <S06C0504 /> },
          { path: "/HadanCampusMap/S06/05/0505", element: <S06C0505 /> },
          { path: "/HadanCampusMap/S06/05/0506", element: <S06C0506 /> },
          { path: "/HadanCampusMap/S06/05/0507", element: <S06C0507 /> },
          { path: "/HadanCampusMap/S06/05/0508", element: <S06C0508 /> },
          { path: "/HadanCampusMap/S06/05/0509", element: <S06C0509 /> },
          { path: "/HadanCampusMap/S06/05/0521", element: <S06C0521 /> },
          { path: "/HadanCampusMap/S06/05/0528", element: <S06C0528 /> },
          { path: "/HadanCampusMap/S06/05/0529", element: <S06C0529 /> },
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
          { path: "/HadanCampusMap/S06/07/0702", element: <S06C0702 /> },
          { path: "/HadanCampusMap/S06/07/0703", element: <S06C0703 /> },
          { path: "/HadanCampusMap/S06/07/0704", element: <S06C0704 /> },
          { path: "/HadanCampusMap/S06/07/0705", element: <S06C0705 /> },
          { path: "/HadanCampusMap/S06/07/0708", element: <S06C0708 /> },
          { path: "/HadanCampusMap/S06/07/0709", element: <S06C0709 /> },
          { path: "/HadanCampusMap/S06/07/0710", element: <S06C0710 /> },
          { path: "/HadanCampusMap/S06/07/0713", element: <S06C0713 /> },
          { path: "/HadanCampusMap/S06/07/0715", element: <S06C0715 /> },
          { path: "/HadanCampusMap/S06/07/0729", element: <S06C0729 /> },
          { path: "/HadanCampusMap/S06/07/0730", element: <S06C0730 /> },
          { path: "/HadanCampusMap/S06/07/0731", element: <S06C0731 /> },
          { path: "/HadanCampusMap/S06/07/0732", element: <S06C0732 /> },
          { path: "/HadanCampusMap/S06/07/0733", element: <S06C0733 /> },
          { path: "/HadanCampusMap/S06/08/0801", element: <S06C0801 /> },
          { path: "/HadanCampusMap/S06/08/0802", element: <S06C0802 /> },
          { path: "/HadanCampusMap/S06/08/0803", element: <S06C0803 /> },
          { path: "/HadanCampusMap/S06/08/0806", element: <S06C0806 /> },
          { path: "/HadanCampusMap/S06/08/0808", element: <S06C0808 /> },
          { path: "/HadanCampusMap/S06/08/0809", element: <S06C0809 /> },
          { path: "/HadanCampusMap/S06/08/0811", element: <S06C0811 /> },
          { path: "/HadanCampusMap/S06/08/0813", element: <S06C0813 /> },
          { path: "/HadanCampusMap/S06/08/0815", element: <S06C0815 /> },
          { path: "/HadanCampusMap/S06/08/0820", element: <S06C0820 /> },
          { path: "/HadanCampusMap/S06/08/0825", element: <S06C0825 /> },
          { path: "/HadanCampusMap/S06/08/0827", element: <S06C0827 /> },
          { path: "/HadanCampusMap/S06/08/0828", element: <S06C0828 /> },
          { path: "/HadanCampusMap/S06/08/0830", element: <S06C0830 /> },
          { path: "/HadanCampusMap/S06/08/0831", element: <S06C0831 /> },
          { path: "/HadanCampusMap/S06/08/0832", element: <S06C0832 /> },
          { path: "/HadanCampusMap/S06/08/0833", element: <S06C0833 /> },
          { path: "/HadanCampusMap/S06/08/0835", element: <S06C0835 /> },
          { path: "/HadanCampusMap/S06/09/0907", element: <S06C0907 /> },
          { path: "/HadanCampusMap/S06/09/0908", element: <S06C0908 /> },
          { path: "/HadanCampusMap/S06/09/0921", element: <S06C0921 /> },

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
