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
import React, {useState} from "react";
import {useForm} from "react-hook-form";


export default function ServerParamsForm() {
    const {register,
        setFocus ,
        watch,
        handleSubmit,
        formState: {errors}} = useForm();
    const [radioValue , setRadioValue] = useState('1')
    function onSubmit(data) {
        console.log(data)
    }

    return (
        <Flex position='relative' width='100%' padding='30px' border='1px solid #000000'>
            <Text position='absolute' top='-14px'
                  left='30px' background='#fff' padding='0 10px'>Параметры сервера Syslog</Text>
            <form className='server-params-form'  onSubmit={handleSubmit(onSubmit)} >
                <Flex width='100%' gap='50px'>
                    <VStack  spacing='20px'>
                        <FormControl display='flex' gap='30px' alignItems='center'>
                            <FormLabel width='250px' whiteSpace='nowrap'>Адрес сервера</FormLabel>
                            <Input  {...register('serverip' , { required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })} type='text' size='sm' width='150px'/>
                            <FormLabel >порт</FormLabel>
                            <Input  {...register('port' , { required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })} type='text' size='sm' width='100px'/>
                            <Select width='100px' size='sm' {...register("option")}>
                                <option value='option1' size='sm'>TCP</option>
                                <option value='option2' size='sm'>UPD</option>
                            </Select>
                        </FormControl>
                        <FormControl display='flex' gap='30px' alignItems='center'>
                            <FormLabel width='250px' whiteSpace='nowrap'>Формат</FormLabel>
                            <Select width='200px' size='sm' {...register("format")}>
                                <option value='option1' size='sm'>Generic CEF</option>
                                <option value='option2' size='sm'>option</option>
                            </Select>
                        </FormControl>
                    </VStack>
                    <VStack >
                        <FormLabel  whiteSpace='nowrap'>Формат времени</FormLabel>
                        <RadioGroup onChange={setRadioValue} value={radioValue}>
                            <Stack >
                                <Radio {...register("timeradio")} value='1'>First</Radio>
                                <Radio {...register("timeradio")} value='2'>Second</Radio>
                                <Radio {...register("timeradio")} value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </VStack>
                </Flex>
                <Button marginTop='30px'
                        colorScheme='#e4e9eb' size='sm'
                        variant='outline' type='submit' width='fit-content' margin='0 auto'>Сменить</Button>
            </form>

        </Flex>
    )
}