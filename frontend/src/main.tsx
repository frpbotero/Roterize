import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { GestADM } from "./pages/ADM/GestADM";
import { Clientes } from "./pages/Clients/Clientes";
import { Produtos } from "./pages/Products/Produtos";
import { Order } from "./pages/Order/Order";
import { ClientRoute } from "./pages/ClientRoute/ClientRoute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { OrderID } from "./pages/OrderID/OrderID";
import { DateProvider } from "./context/DateContext";
import { ReportID } from "./pages/ReportID/ReportID";
import { Reports } from "./pages/Reports/Reports";
import { UserProvider } from "./context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/adm", element: <GestADM /> },
      { path: "/client", element: <Clientes /> },
      { path: "/product", element: <Produtos /> },
      { path: "/order", element: <Order /> },
      { path: "/delivery", element: <ClientRoute /> },
      { path: "/destiny", element: <OrderID /> },
      { path: "/reports", element: <Reports /> },
      { path: "/report", element: <ReportID /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <DateProvider>
        <RouterProvider router={router} />
      </DateProvider>
    </UserProvider>
  </React.StrictMode>
);
