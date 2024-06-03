import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexLayout from "./pages/layout/IndexLayout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import PageOne from "./pages/PageOne.jsx";
import PageTwo from "./pages/PageTwo.jsx";
import PageThree from "./pages/PageThree.jsx";
import PageFour from "./pages/PageFour.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import S06Page from "./pages/S06Page.jsx";
import S06Second from "./pages/S06/S06Second.jsx";
import S06Sixth from "./pages/S06/S06Sixth.jsx";
import S06Layout from "./pages/layout/S06Layout.jsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/one",
        element: <PageOne />,
      },
      {
        path: "/two",
        element: <PageTwo />,
      },
      {
        path: "/three",
        element: <PageThree />,
      },
      {
        path: "/four",
        element: <PageFour />,
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
        path: "/one/S06",
        element: <S06Layout />,
        children: [
          {
            path: "/one/S06/2",
            element: <S06Second />,
          },
          // {
          //   path: "/one/S06/3",
          //   element: <S06Third />,
          // },
          // {
          //   path: "/one/S06/4",
          //   element: <S06Fourth />,
          // },
          // {
          //   path: "/one/S06/5",
          //   element: <S06Fifth />,
          // },
          {
            path: "/one/S06/6",
            element: <S06Sixth />,
          },
          // {
          //   path: "/one/S06/7",
          //   element: <S06Seventh />,
          // },
          // {
          //   path: "/one/S06/8",
          //   element: <S06Eighth />,
          // },
          // {
          //   path: "/one/S06/9",
          //   element: <S06Nineth />,
          // },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
