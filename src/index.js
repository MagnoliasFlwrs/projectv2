import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import LoginLayout from "./routes/LoginLayout";
import {ChakraProvider} from "@chakra-ui/react";


localStorage.setItem('user' , JSON.stringify({
    userlogin : 'admin',
    userpass : 'admin'
}))

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>
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



