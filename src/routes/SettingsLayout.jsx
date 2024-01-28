import React from 'react';
import {Flex, Link, Text} from "@chakra-ui/react";
import {Outlet} from "react-router";

const SettingsLayout = () => {
    return (
        <Flex flexDirection='column' gap='30px'>
            <Flex paddingLeft='83px' gap='20px'>
                <Link href='/settings/groups'>Группы и пользователи</Link>
                <Link href='/settings/calls'>Правила контроля звонков</Link>
            </Flex>
            <Flex width='100%' flexDirection='column' alignItems='center' gap='30px' paddingBottom='100px'>
                <Text fontSize='30px'>Настройки</Text>
                <Outlet/>
            </Flex>
        </Flex>
    );
};

export default SettingsLayout;