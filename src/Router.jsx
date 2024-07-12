import { useRoutes } from "react-router-dom";
import { lazyLoadRoutes } from "./utils/lazy-load-route.helper.jsx";
import RouterDefaultPage from "./RouterDefaultPage.jsx";

const public_routes = [
  {
    path: "",
    element: lazyLoadRoutes(() => import("./layouts/MainLayout.jsx")),
    children: [
      {
        path: "home",
        element: lazyLoadRoutes(() => import("./pages/Home/Home.jsx")),
      },
      {
        path: "skills",
        element: lazyLoadRoutes(() => import("./pages/Skills/Skills.jsx")),
      },
      {
        path: "projects",
        element: lazyLoadRoutes(() => import("./pages/Projects/Projects.jsx")),
      },
      {
        path: "projects/:id",
        element: lazyLoadRoutes(() =>
          import("./components/ProjectDetail/ProjectDetail.jsx")
        ),
      },
      {
        path: "contacts",
        element: lazyLoadRoutes(() => import("./pages/Contacts/Contacts.jsx")),
      },
      {
        path: "",
        element: <RouterDefaultPage />,
      },
    ],
  },
  {
    path: "*",
    element: <RouterDefaultPage />,
  },
];

const private_routes = [];

const getRoutes = () => {
  const isAdmin = false; //FIXME
  return [...public_routes, ...(isAdmin ? private_routes : [])];
};

export const Router = () => {
  const routes = useRoutes(getRoutes());
  return routes;
};

export default Router;
