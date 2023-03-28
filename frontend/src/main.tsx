import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { GestADM } from "./pages/ADM/GestADM";
import { Clientes } from "./pages/Clients/Clientes";
import { Produtos } from "./pages/Products/Produtos";
import { Entregas } from "./pages/Send/Entregas";
import { Delivery } from "./pages/Delivery/Delivery";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
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
