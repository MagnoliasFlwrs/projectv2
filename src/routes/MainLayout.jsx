import React, {useEffect} from 'react'
import {Flex, Link} from "@chakra-ui/react";
import {Outlet} from "react-router";
import {useNavigate} from "react-router-dom";
import useAuth from "../store";
import Header from "../components/Header";

export default function MainLayout() {
    const navigate = useNavigate();
    const isAuth =  useAuth((state)=> state.isAuth)
    useEffect(() => {
        if (!isAuth) {
            navigate("/auth")
        }
    }, [isAuth]);


    return (
        <Flex flexDirection='column' gap='50px' padding='0 16px' minHeight='100vh'>
            <Header/>
            <Outlet/>
        </Flex>
    )
}