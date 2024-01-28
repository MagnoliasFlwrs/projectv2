import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import GroupItem from "../components/GroupItem";
import {useGroupsAndUsers} from "../store";
import AddIcon from '@mui/icons-material/Add';
import AddGroupModal from "../components/AddGroupModal";

const GroupsLayout = () => {
    const groups = useGroupsAndUsers((state) => state.groups);
    const showAddGroupModal = useGroupsAndUsers((state) => state.showAddGroupModal);
    return (
        <Flex width='100%' flexDirection='column' alignItems='center' gap='30px' paddingBottom='100px'>
            <Flex gap='50px' width='100%'>
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
                <Flex position='relative' width='100%' padding='20px 0' border='1px solid #000000'>
                    <Text position='absolute' top='-14px'
                          left='10px' background='#fff' padding='0 10px'>Диапазон номеров</Text>

                </Flex>
            </Flex>
            <AddGroupModal/>
        </Flex>
    );
};

export default GroupsLayout;