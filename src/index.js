import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import LoginLayout from "./routes/LoginLayout";
import {ChakraProvider} from "@chakra-ui/react";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children: [
            {
                path: "user",
                element: <p>user page</p>,
            },
            {
                path: "dashboard",
                element: <p>dashboard page</p>,
            },
            {
                path: "reference",
                element: <p>reference page</p>,
            },
            {
                path: "convercation",
                element: <p>convercation page</p>,
            },
            {
                path: "reports",
                element: <p>reports page</p>,
            },
            {
                path: "settings",
                element: <p>settings page</p>,
            },

        ],
    },
    {
        path: 'auth',
        element : <LoginLayout/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <ChakraProvider>
              <RouterProvider router={router} />
          </ChakraProvider>
      </React.StrictMode>
);



