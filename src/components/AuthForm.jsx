import {Button, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useForm, useFormState} from "react-hook-form";
import useAuth from "../store";


export default function AuthForm() {
    const {register,
        setValue ,
        setFocus ,
        watch,
        handleSubmit,
        formState: {errors}} = useForm();
    const loading =  useAuth((state)=> state.loading)
    const firstEnter =  useAuth((state)=> state.firstEnter)
    const authUser =  useAuth((state)=> state.authUser)
    const setNewPass =  useAuth((state)=> state.setNewPass)
    const error =  useAuth((state)=> state.error);
    const errorEnterCounter =  useAuth((state)=> state.errorEnterCounter);

    const authUserFunc = (data)=> {
        authUser(data).then(r => console.log(r))
        console.log(data)
    }
    const setNewPassord = (data) => {
        setNewPass(data).then(r => console.log(r))
        console.log(data)
    }

    if (firstEnter) {
        setValue('userpass' , '');
        setFocus("userpass")
    }
    useEffect(() => {
        if (error) {
            setValue('userpass' , '');
            setValue('userlogin' , '');
            setFocus("userlogin")
        }
    }, [error]);


    return (
        <>
            <form  onSubmit={firstEnter ? handleSubmit(setNewPassord) : handleSubmit(authUserFunc)}>
                <VStack width='300px' spacing='20px'>
                    <FormControl>
                        <FormLabel>Имя пользователя</FormLabel>
                        <Input {...register('userlogin' , {
                            required: {
                                message:'Обязательное поле',
                                value:true
                            }
                        })} type='text' placeholder='Имя пользователя' size='lg'/>
                        <Text>{errors?.userlogin?.message}</Text>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Пароль</FormLabel>
                        <Input  {...register('userpass' , { required: {
                                message:'Обязательное поле',
                                value:true
                            }
                        })} type='password' size='lg'/>
                        <Text>{errors?.userpass?.message}</Text>
                    </FormControl>
                    {
                        firstEnter ?
                            <FormControl>
                                <FormLabel>Пароль</FormLabel>
                                <Input {...register("confirmPassword", {
                                    required: true,
                                    validate: (val)=> {
                                        if (watch('userpass') != val) {
                                            return "Пароль не совпадает";
                                        }
                                    },
                                })} type='password' size='lg'/>
                                <Text>{errors?.confirmPassword?.message}</Text>
                            </FormControl> :
                            ''
                    }
                    <Button  width='100%' colorScheme='#e4e9eb' size='lg' variant='outline' type='submit' >Войти</Button>
                </VStack>
            </form>

        </>

    )
}