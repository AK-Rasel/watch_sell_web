import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";
import Shop from "../page/shop/Shop";
import Cart from "../page/shop/Cart";
import Product from "../page/shop/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);
export default router;
