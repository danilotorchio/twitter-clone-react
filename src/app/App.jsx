import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Header } from "./layout/Header";
import { Content } from "./layout/Content";

// pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const App = () => {
  return (
    <>
      <Header />

      <Content>
        <RouterProvider router={router} />
      </Content>
    </>
  );
};

export { App };
