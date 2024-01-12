
import React, {useEffect} from 'react'
import {Box, Flex, Text, useBoolean, useDisclosure} from '@chakra-ui/react'
import AuthForm from "../components/AuthForm";
import ErrorModal from "../components/ErrorModal";
import {useNavigate} from "react-router-dom";
import Timer from "../components/Timer";
import useAuth from "../store";
import AttentionMessage from "../components/AttentionMessage";




export default function LoginLayout() {
    const { isOpen } = useDisclosure();
    const navigate = useNavigate();
    const isAuth =  useAuth((state)=> state.isAuth)
    const attentionMessage = useAuth((state) => (state.attentionMessage))

    console.log(isAuth)
    useEffect(() => {
        if (isAuth) {
            navigate("/dashboard")
        }else {
            navigate("/auth")
        }
    }, [navigate,isAuth]);



    return (
        <Flex h='100vh' w='100%' flexDirection='column' justifyContent='space-between'>
            <Flex h='90%' w='100%' alignItems='center' justifyContent='center' gap='50px' flexDirection='column' gap='50px'>
                {
                    attentionMessage ?
                    <AttentionMessage/> :
                    ''
                }

                <Timer/>
                <Flex borderWidth='1px' borderColor='#e4e9eb' borderRadius='10px' padding='20px' gap='50px' background='#fdfdfd'>
                    <AuthForm/>
                    <Box>
                        <Text fontSize='xl' textAlign='center'>Название приложения </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex  justifyContent='flex-end' padding='0 50px 50px'>
                <Text fontSize='md'>Версия ПО: ХХХХХ</Text>
            </Flex>
            <ErrorModal isOpen={isOpen}/>
        </Flex>
    )
}
