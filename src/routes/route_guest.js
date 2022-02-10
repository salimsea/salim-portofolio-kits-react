import { Login, Blog, Home, Portfolio } from "src/pages";

const route_guest = [
  {
    path: "",
    exact: true,
    name: "HOME",
    Component: Home,
  },
  {
    path: "portfolio",
    exact: false,
    name: "PORTFOLIO",
    Component: Portfolio,
  },
  {
    path: "portfolio/:id",
    exact: true,
    name: "PORTFOLIO",
    Component: Portfolio,
  },
  {
    path: "blog",
    exact: true,
    name: "BLOGGER",
    Component: Blog,
  },
  {
    path: "login",
    exact: true,
    name: "CONSOLE ADMIN",
    Component: Login,
  },
];

export default route_guest;
