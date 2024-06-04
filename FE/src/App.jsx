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
import S06C0601 from "./pages/S06/6th/S06C0601.jsx";





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
            path: "/one/S06/02",
            element: <S06Second />,
          },
          // {
          //   path: "/one/S06/03",
          //   element: <S06Third />,
          // },
          // {
          //   path: "/one/S06/04",
          //   element: <S06Fourth />,
          // },
          // {
          //   path: "/one/S06/05",
          //   element: <S06Fifth />,
          // },
          {
            path: "/one/S06/06",
            element: <S06Sixth />,
          },
          // {
          //   path: "/one/S06/07",
          //   element: <S06Seventh />,
          // },
          // {
          //   path: "/one/S06/08",
          //   element: <S06Eighth />,
          // },
          // {
          //   path: "/one/S06/09",
          //   element: <S06Nineth />,
          // },
          {
            path: "/one/S06/06/0601",
            element: <S06C0601 />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
