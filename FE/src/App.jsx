import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexLayout from "./pages/layout/IndexLayout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import PageOne from "./pages/PageOne.jsx";
import PageTwo from "./pages/PageTwo.jsx";
import PageThree from "./pages/PageThree.jsx";
import PageFour from "./pages/PageFour.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

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
        element: <RegisterPage />
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
