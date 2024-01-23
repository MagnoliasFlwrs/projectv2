import {Flex, Text} from "@chakra-ui/react";
import React from "react";

export default function ConversationFilterForm() {
    return (
        <>
            <form>
                <Flex position='relative' width='100%' padding='30px' border='1px solid #000000'>
                    <Text position='absolute'
                          top='-14px' left='30px'
                          background='#fff'
                          padding='0 10px'>Звонок совершен в интервале времени</Text>
                    <Flex display='flex'>

                    </Flex>
                </Flex>
            </form>
        </>
    )
}