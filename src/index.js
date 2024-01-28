import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import LoginLayout from "./routes/LoginLayout";
import {ChakraProvider} from "@chakra-ui/react";
import UserAdd from "./routes/UserAdd";
import DashboardLayout from "./routes/DashboardLayout";
import SystemSettingsLayout from "./routes/SystemSettingsLayout";
import ReportsLayout from "./routes/ReportsLayout";
import ConversationLayout from "./routes/ConversationLayout";
import SettingsLayout from "./routes/SettingsLayout";
import GroupsLayout from "./routes/GroupsLayout";


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
                element: <DashboardLayout/>,
            },
            {
                path: "reference",
                element: <p>reference page</p>,
            },
            {
                path: "convercation",
                element: <ConversationLayout/>,
            },
            {
                path: "reports",
                element: <ReportsLayout/>,
            },
            {
                path: "systemsettings",
                element: <SystemSettingsLayout/>,
            },
            {
                path: "settings",
                element: <SettingsLayout/>,
                children: [
                    {
                        path: "groups",
                        element: <GroupsLayout/>,
                    },
                    {
                        path: "calls",
                        element: <p>groups</p>,
                    }
                ]
            },

        ],
    },
    {
        path: 'auth',
        element : <LoginLayout/>
    },
    {
        path: "useradd",
        element: <UserAdd/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <ChakraProvider>
              <RouterProvider router={router} />
          </ChakraProvider>
      </React.StrictMode>
);



