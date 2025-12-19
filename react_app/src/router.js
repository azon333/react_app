import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shopping",
                element: <Shopping />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "*",
                element: <h1>Page Not Found</h1>
            }
        ]
    }
]);

export default router;
