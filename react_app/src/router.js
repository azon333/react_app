import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import About from "./pages/About";
import {getProducts} from "./loaders/productsLoader";
import Products from "./pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "shopping", element: <Shopping /> },
            { path: "products", loader: getProducts, element: <Products /> },
            { path: "about", element: <About /> },
            { path: "*", element: <h1>Page Not Found</h1> }
        ]
    }
]);

export default router;
