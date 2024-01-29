import React, {useState} from 'react';
import {Flex, Input, Text} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";
import {useGroupsAndUsers} from "../store";

const NumbersItem = ({item}) => {
    const deleteNumbers = useGroupsAndUsers((state) => state.deleteNumbers);
    const [numberFrom , setNumberFrom] = useState('');
    const [numberTo , setNumberTo] = useState('');

    function changeNumberFrom(event) {
        setNumberFrom(event.target.value);
    }
    function changeNumberTo(event) {
        setNumberTo(event.target.value);
    }
    return (
        <Flex width='100%' height='fit-content' gap='30px'>
            <Flex alignItems='center' gap='10px'>
                <Text width='100px'>С номера:</Text>
                <Input value={numberFrom} width='200px' type='number' onChange={changeNumberFrom}/>
            </Flex>
            <Flex alignItems='center' gap='10px'>
                <Text width='80px'>по номер:</Text>
                <Input value={numberTo} width='200px' type='number' onChange={changeNumberTo}/>
            </Flex>
            <Text padding='5px 10px' border='1px solid #000'
                  display='flex' alignItems='center' gap='10px'
                  cursor='pointer' width='fit-content'
                  height='fit-content' onClick={()=> deleteNumbers(item?.id)}>
                <DeleteIcon/>
                Удалить
            </Text>
        </Flex>
    );
};

export default NumbersItem;