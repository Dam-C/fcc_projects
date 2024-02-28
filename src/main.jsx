import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import * as P from "./pages/_pagesIndex";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <P.ErrorPage />,
    children: [
      {
        path: "/",
        element: <P.Home />,
      },
      {
        path: "/project1",
        element: <P.Project1 />,
      },
      {
        path: "/project2",
        element: <P.Project2 />,
      },
      {
        path: "/project3",
        element: <P.Project3 />,
      },
      {
        path: "/project4",
        element: <P.Project4 />,
      },
      {
        path: "/project5",
        element: <P.Project5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
