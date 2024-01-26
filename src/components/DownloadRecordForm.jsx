import React from 'react';
import {Button, Flex, Input, Text, Textarea} from "@chakra-ui/react";
import {Controller, useForm} from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {useConversation} from "../store";

const DownloadRecordForm = () => {
    const {register,reset,control,
        handleSubmit,
        formState: {errors}} = useForm();

    const hideDownloadRecord = useConversation((state) => state.hideDownloadRecord);

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection='column' gap='30px'>
                <Flex gap='20px' alignItems='center'>
                    <Text fontSize='16px' width='150px' flexShrink='0'>Дата документа</Text>
                    <Flex>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <ReactDatePicker
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    selected={value}
                                />
                            )}
                        />
                        <CalendarMonthIcon/>
                    </Flex>
                </Flex>
                <Flex gap='20px' alignItems='center'>
                    <Text fontSize='16px' width='150px' flexShrink='0'>Номер документа</Text>
                    <Flex>
                        <Input {...register('document' , {
                            required: {
                                message:'Обязательное поле',
                                value:true
                            }
                        })}/>
                        <Text>{errors?.document?.message}</Text>
                    </Flex>

                </Flex>
                <Flex gap='20px' alignItems='center'>
                    <Text fontSize='16px' width='150px' flexShrink='0'>Комментарий</Text>
                    <Textarea {...register('comment' )} resize='none'/>
                </Flex>
                <Flex width='100%' justifyContent='flex-end' gap='30px'>
                    <Button type='submit'>Выгрузить</Button>
                    <Button type='button' onClick={hideDownloadRecord}>Отменить</Button>
                </Flex>
            </Flex>

        </form>
    );
};

export default DownloadRecordForm;