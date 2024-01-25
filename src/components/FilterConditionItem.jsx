import React  from 'react';
import {Flex, Input, Text} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import {useConversation} from "../store";

const FilterConditionItem = ({item , register}) => {
    const deleteCondition = useConversation((state) => state.deleteCondition);

    return (
        <Flex  width='100%' gap='30px' alignItems='center'>
            <Flex gap='15px' alignItems='center'>
                <Text whiteSpace='nowrap' fontSize='14px'>Вызывающий номер</Text>
                <Input width='150px' type='text' size='sm'
                   {...register('callingNum'+ item.id  , {
                       required: {
                           message:'Обязательное поле',
                           value:true
                       }
                   })}
                />
            </Flex>
            <Flex gap='15px' alignItems='center'>
                <Text whiteSpace='nowrap' fontSize='14px'>Отвечающий номер</Text>
                <Input width='150px' type='text'  size='sm'
                       {...register('amswerNum'+ item.id , {
                           required: {
                               message:'Обязательное поле',
                               value:true
                           }
                       })}
                />
            </Flex>
            <Text padding='5px 10px' border='1px solid #000'
                  display='flex' alignItems='center' gap='10px'
                  cursor='pointer' onClick={() => deleteCondition(item.id)} >
                <DeleteIcon/>
                Удалить
            </Text>
        </Flex>
    );
};

export default FilterConditionItem;