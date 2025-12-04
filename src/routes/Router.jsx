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
import Toys from "../pages/Toys/Toys";
import Cart from "../pages/Cart/Cart";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        path: "/about-us",
        Component: AboutUs,
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
        element: <ToyDetails></ToyDetails>,
        hydrateFallbackElement: <SyncLoader color="#FF6B6B" />,
      },
      {
        path: "/toys",
        loader: async () => {
          const res = await fetch("/ToyData.json");
          const data = await res.json();

          return data;
        },
        Component: Toys,
        hydrateFallbackElement: <SyncLoader color="#FF6B6B" />,
      },
      {
        path: "/cart",
        loader: async () => {
          const res = await fetch("/ToyData.json");
          const data = await res.json();

          return data;
        },
        element: (
          <PrivateRoute>
            <Cart></Cart>
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
