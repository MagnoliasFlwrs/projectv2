import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import '../index.css';
import {useForm} from "react-hook-form";


export default function ATCIntegration() {
    const {register,
        setFocus ,
        watch,
        handleSubmit,
        formState: {errors}} = useForm();
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Flex position='relative' width='100%' padding='30px' border='1px solid #000000'>
            <Text position='absolute' top='-14px'
                  left='30px' background='#fff' padding='0 10px'>Интеграция с АТС</Text>
            <form className='ats-form'  onSubmit={handleSubmit(onSubmit)} >
                <Button marginTop='30px'
                        colorScheme='#e4e9eb' size='sm'
                        variant='outline' type='submit' width='fit-content'>Сменить</Button>
            </form>

        </Flex>
    )
}