import { Blog, Home, Portfolio, AdmLogin, AdmDashboard } from "src/pages";

const route_guest = [
  {
    path: "/",
    exact: true,
    name: "HOME",
    Component: Home,
  },
  {
    path: "/portfolio",
    exact: false,
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
  {
    path: "/admin-console/login",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: AdmLogin,
  },
  {
    path: "/admin-console",
    exact: true,
    name: "ADMIN CONSOLE",
    Component: AdmDashboard,
  },
];

export default route_guest;
