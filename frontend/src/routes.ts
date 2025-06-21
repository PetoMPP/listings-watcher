import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Search from "./pages/Search";

const routes = [
    { path: "/", Component: Home, index: true },
    { path: "/search", Component: Search },
];

export default createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: routes
    }
]);