import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MyProfile from "../pages/MyProfile/MyProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import { SyncLoader } from "react-spinners";
import NotFound from "../pages/NotFound/NotFound";
import ResetPassword from "../pages/ForgetPassword/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/resetPassword",
        Component: ResetPassword,
      },
      {
        path: "/toyDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("/ToyData.json");
          const data = await res.json();
          const toy = data.find((t) => t.toyId == params.id);
          return toy;
        },
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <SyncLoader color="#FF6B6B" />,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  { path: "*", Component: NotFound },
]);
