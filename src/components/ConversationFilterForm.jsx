import {Button, Flex, Input, Select, Text, useDisclosure} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import Downshift from "downshift";
import Kalendaryo from "kalendaryo";
import Calendar from "./Calendar";
import { format } from "date-fns";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import "../../src/index.css";
import {Controller, useForm} from "react-hook-form";
import {useConversation} from "../store";
import ConfirmResetModal from "./ConfirmResetModal";
import FilterConditionItem from "./FilterConditionItem";
import DatePicker from "react-datepicker"
import ReactDatePicker from "react-datepicker";


export default function ConversationFilterForm({event,...props}) {
    const { isOpen } = useDisclosure();
    const {register,reset,control,
        handleSubmit,
        formState: {errors}} = useForm();
    function onSubmit(data) {
        console.log(data)
    }
    const [startDate, setStartDate] = useState(new Date());
    const conditions =  useConversation((state) => state.conditions);
    const hideFilterModal = useConversation((state) => state.hideFilterModal);
    const resetFilter = useConversation((state) => state.resetFilter);
    const showConfirmReset = useConversation((state) => state.showConfirmReset);
    const addCondition = useConversation((state) => state.addCondition);


    useEffect(() => {
        reset()
    }, [resetFilter]);


    return (
        <>
            <form  onSubmit={handleSubmit(onSubmit)} >
                <Flex position='relative' width='100%' padding='30px' border='1px solid #000000' marginTop='20px'>
                    <Text position='absolute'
                          top='-14px' left='30px'
                          background='#fff'
                          padding='0 10px'>Звонок совершен в интервале времени</Text>
                    <Flex gap='50px'>
                        <Flex gap='10px' alignItems='center'>
                            <span>c:</span>
                            <Controller
                                control={control}
                                name="dateFrom"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                    />
                                )}
                            />

                            <CalendarMonthIcon/>
                            <Select size='sm' {...register('timefrom' , {
                                required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })}>
                                <option  value='option1'>1:00:00</option>
                                <option value='option2'>2:00:00</option>
                                <option value='option3'>3:00:00</option>
                                <option value='option4'>4:00:00</option>
                                <option value='option5'>5:00:00</option>
                                <option value='option6'>6:00:00</option>
                                <option value='option7'>7:00:00</option>
                                <option value='option8'>8:00:00</option>
                                <option value='option9'>9:00:00</option>
                                <option value='option10'>10:00:00</option>
                                <option value='option11'>11:00:00</option>
                                <option value='option12'>12:00:00</option>
                            </Select>
                            <AccessTimeIcon/>
                        </Flex>
                        <Flex gap='10px' alignItems='center'>
                            <span>до:</span>
                            <Controller
                                control={control}
                                name="dateTo"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <ReactDatePicker
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                    />
                                )}
                            />
                            <CalendarMonthIcon/>
                            <Select size='sm' {...register('timeto' , {
                                required: {
                                    message:'Обязательное поле',
                                    value:true
                                }
                            })}>
                                <option  value='option1'>1:00:00</option>
                                <option value='option2'>2:00:00</option>
                                <option value='option3'>3:00:00</option>
                                <option value='option4'>4:00:00</option>
                                <option value='option5'>5:00:00</option>
                                <option value='option6'>6:00:00</option>
                                <option value='option7'>7:00:00</option>
                                <option value='option8'>8:00:00</option>
                                <option value='option9'>9:00:00</option>
                                <option value='option10'>10:00:00</option>
                                <option value='option11'>11:00:00</option>
                                <option value='option12'>12:00:00</option>
                            </Select>
                            <AccessTimeIcon/>
                        </Flex>

                    </Flex>
                </Flex>
                <Flex position='relative' width='100%'
                      padding='30px' border='1px solid #000000'
                      marginTop='20px' flexDirection='column' gap='20px'>
                    <Text position='absolute'
                          top='-14px' left='30px'
                          background='#fff'
                          padding='0 10px'>Участники переговоров</Text>
                    <Flex flexDirection='column' gap='10px' width='100%' maxHeight='200px' overflowY='auto'>
                        {
                            conditions ?
                                conditions.map((item , i) =>
                                    <FilterConditionItem register={register} key={i} item={item}/>
                                )
                                :
                                ''
                        }
                    </Flex>
                    <Text padding='5px 10px' border='1px solid #000'
                          display='flex' alignItems='center'
                          gap='10px' cursor='pointer' width='fit-content' onClick={addCondition}>
                        <AddIcon/>
                        Добавить условие
                    </Text>
                </Flex>
                <Flex position='relative' width='100%'
                      padding='30px' border='1px solid #000000'
                      marginTop='20px' flexDirection='column' gap='20px'>
                    <Text position='absolute'
                          top='-14px' left='30px'
                          background='#fff'
                          padding='0 10px'>Длительность записи</Text>
                    <Flex gap='30px' alignItems='center'>
                        <Flex gap='15px'  alignItems='center'>
                            <Text>От:</Text>
                            <Input width='150px' type='text' size='sm'
                                   {...register('durationFrom' , {
                                       required: {
                                           message:'Обязательное поле',
                                           value:true
                                       }
                                   })}/>
                        </Flex>
                        <Flex gap='15px'  alignItems='center'>
                            <Text>до:</Text>
                            <Input width='150px' type='text' size='sm'
                                   {...register('durationTo' , {
                                       required: {
                                           message:'Обязательное поле',
                                           value:true
                                       }
                                   })}
                            />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center' marginTop='40px'>
                    <Button type='button' size='sm' gap='20px' onClick={showConfirmReset}>
                        Очистить фильтр
                    </Button>
                    <Flex gap='20px'>
                        <Button  width='100%' colorScheme='#e4e9eb' size='sm' width='fit-content'
                                 variant='outline' type='submit' margin='0 0 0 auto'>Применить</Button>
                        <Button type='button' size='sm' onClick={hideFilterModal}>
                            Отменить
                        </Button>
                    </Flex>
                </Flex>
            </form>
            <ConfirmResetModal isOpen={isOpen}/>
        </>
    )
}