import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import GroupItem from "./GroupItem";
import AddIcon from "@mui/icons-material/Add";
import {useGroupsAndUsers} from "../store";

const GroupBlock = () => {
    const groups = useGroupsAndUsers((state) => state.groups);
    const showAddGroupModal = useGroupsAndUsers((state) => state.showAddGroupModal);
    return (
        <Flex position='relative' width='500px' minHeight='300px'
              padding='20px 0' border='1px solid #000000'
              flexDirection='column' justifyContent='space-between' alignItems='center'>
            <Text position='absolute' top='-14px'
                  left='10px' background='#fff' padding='0 10px'>Группы</Text>
            <Flex width='100%' flexDirection='column'>
                {
                    groups ?
                        groups.map((item , i) =>
                            <GroupItem key={i} item={item}/>
                        )
                        :
                        ''

                }
                <GroupItem/>
            </Flex>
            <Button display='flex'
                    gap='10px' size='md'
                    width='fit-content'
                    onClick={showAddGroupModal}
            ><AddIcon/> Добавить группу</Button>

        </Flex>
    );
};

export default GroupBlock;