import {Button, Flex, FormControl, FormLabel, Input, Text, useDisclosure, VStack} from "@chakra-ui/react";
import {useForm, useFormState} from "react-hook-form";
import React from "react";
import UserAddModal from "../components/UserAddModal";

export default function UserAdd() {
    const {register,
        handleSubmit,
        formState: {errors}} = useForm();
    const { isOpen, onOpen, onClose } = useDisclosure()
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Flex height='100vh' flexDirection='column' gap='50px' padding='0 16px 100x 0'>
            <Flex padding='20px 0'>
                logo
            </Flex>
            <Flex border='1px solid #000000' flexDirection='column'>
                <Text padding='5px 10px'>Мастер настройки пользователей</Text>
                <Flex padding='50px 30px' borderTop='1px solid #000000' flexDirection='column'
                      borderBottom='1px solid #000000' alignItems='flex-start' gap='50px'>
                    <Text>
                        Вы вошли как СуперАдминистратор.<br/>
                        Добавьте сотрудника в группу "Департамент безопасности"
                    </Text>

                    <form  onSubmit={handleSubmit(onOpen)}>
                        <VStack width='300px' spacing='20px'>
                            <FormControl>
                                <Input {...register('userfio' , {
                                    required: {
                                        message:'Обязательное поле',
                                        value:true
                                    }
                                })} type='text' placeholder='ФИО' size='lg'/>
                                <Text>{errors?.userlogin?.message}</Text>
                            </FormControl>
                            <FormControl>
                                <Input {...register('userlogin' , {
                                    required: {
                                        message:'Обязательное поле',
                                        value:true
                                    }
                                })} type='text' placeholder='Логин' size='lg'/>
                                <Text>{errors?.userlogin?.message}</Text>
                            </FormControl>

                            <FormControl>
                                <Input  {...register('userpass' , { required: {
                                        message:'Обязательное поле',
                                        value:true
                                    }
                                })} type='password' size='lg' placeholder='Пароль'/>
                                <Text>{errors?.userpass?.message}</Text>
                            </FormControl>
                            <Button  width='100%'
                                     colorScheme='#e4e9eb'
                                     size='lg' variant='outline'
                                     type='submit' onClick={onOpen}>Добавить</Button>
                        </VStack>
                    </form>
                </Flex>
                <Text padding='15px 10px'></Text>
            </Flex>
            <UserAddModal onOpen={onOpen} isOpen={isOpen}/>
        </Flex>
    )
}