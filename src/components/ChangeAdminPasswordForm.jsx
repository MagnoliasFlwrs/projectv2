import {Button, Flex, FormControl, FormLabel, Input, Text, VStack} from "@chakra-ui/react";
import {useForm, useFormState} from "react-hook-form";
import React from "react";

export default function ChangeAdminPasswordForm() {
    const {register,
        setValue ,
        setFocus ,
        watch,
        handleSubmit,
        formState: {errors}} = useForm();
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Flex position='relative' width='100%' padding='30px' border='1px solid #000000'>
            <Text position='absolute' top='-14px' left='30px' background='#fff' padding='0 10px'>Смена пароля Системного Администратора</Text>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <VStack  spacing='20px'>
                    <FormControl display='flex' gap='30px' justifyContent='space-between' alignItems='center'>
                        <FormLabel margin='0' width='250px' whiteSpace='nowrap'>Действующий пароль</FormLabel>
                        <Flex>
                            <Input  {...register('prevuserpass' , { required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })} type='password' size='sm' width='250px'/>
                            <Text>{errors?.prevuserpass?.message}</Text>
                        </Flex>
                    </FormControl>

                    <FormControl display='flex' gap='30px' justifyContent='space-between' alignItems='center'>
                        <FormLabel margin='0' width='250px' whiteSpace='nowrap'>Новый пароль</FormLabel>
                        <Flex>
                            <Input  {...register('userpass' , { required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })} type='password' size='sm' width='250px'/>
                            <Text>{errors?.userpass?.message}</Text>
                        </Flex>

                    </FormControl>
                    <FormControl display='flex' gap='30px' justifyContent='space-between' alignItems='center'>
                        <FormLabel margin='0' width='250px' whiteSpace='nowrap'>Повтор пароля</FormLabel>
                        <Flex>
                            <Input {...register("confirmPassword", {
                                required: true,
                                validate: (val)=> {
                                    if (watch('userpass') != val) {
                                        return "Пароль не совпадает";
                                    }
                                },
                            })} type='password' size='sm' width='250px'/>
                            <Text>{errors?.confirmPassword?.message}</Text>
                        </Flex>

                    </FormControl>
                    <Button  width='100%' colorScheme='#e4e9eb' size='sm' width='fit-content'
                             variant='outline' type='submit' margin='0 0 0 auto'>Сменить</Button>
                </VStack>
            </form>
        </Flex>
    )
}