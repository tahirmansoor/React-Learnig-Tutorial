// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import App from './App.jsx';
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import ErrorPage from "./error-page";
import About from "./routes/About";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> }, // Home page
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "About", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
