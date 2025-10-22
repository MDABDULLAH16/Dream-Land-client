import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MyProfile from "../pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
        children: [{ index: true, Component: Home }, {
        path:'myProfile',Component:MyProfile
    }],
  },
]);
