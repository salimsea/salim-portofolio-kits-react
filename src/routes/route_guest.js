import { Blog, Home, Portfolio } from "src/pages";

const route_guest = [
  {
    path: "/",
    exact: true,
    name: "HOME",
    Component: Home,
  },
  {
    path: "/portfolio",
    exact: true,
    name: "PORTFOLIO",
    Component: Portfolio,
  },
  {
    path: "/portfolio/:id",
    exact: true,
    name: "PORTFOLIO",
    Component: Portfolio,
  },
  {
    path: "/blog",
    exact: true,
    name: "BLOGGER",
    Component: Blog,
  },
];

export default route_guest;
