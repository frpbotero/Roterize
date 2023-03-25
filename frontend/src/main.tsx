import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Login } from "./pages/Login";
import { GestADM } from "./pages/GestADM";
import { Clientes } from "./pages/Clientes";
import { Produtos } from "./pages/Produtos";
import { Entregas } from "./pages/Entregas";
import { Delivery } from "./pages/Delivery";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/gestadm", element: <GestADM /> },
      { path: "/client", element: <Clientes /> },
      { path: "/product", element: <Produtos /> },
      { path: "/route", element: <Entregas /> },
      { path: "/delivery", element: <Delivery /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
