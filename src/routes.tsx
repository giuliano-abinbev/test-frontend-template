/* eslint-disable react-refresh/only-export-components */
import loadable from "@loadable/component";

const Home = loadable(
  () => import(/* webpackPrefetch: true */ "./screens/Home/Home")
);

const routes = [
  {
    path: "/",
    exact: true,
    index: true,
    element: <Home />,
    isProtected: false,
  },
];

export default routes;
