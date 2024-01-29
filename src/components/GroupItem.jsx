import React from 'react';
import {Flex , Text} from "@chakra-ui/react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import BlockIcon from '@mui/icons-material/Block';
import {useGroupsAndUsers} from "../store";


const GroupItem = ({item}) => {
    const showAddGroupModal = useGroupsAndUsers((state) => state.showAddGroupModal);
    const showBlockMessage = useGroupsAndUsers((state) => state.showBlockMessage);
    return (
        <>
            {
                item ?
                    <Flex padding='5px 20px' _hover={{background: '#e0e0e0'}} justifyContent='space-between' width='100%' alignItems='center'>
                        <Text>{item?.groupName}</Text>
                        <Flex alignItems='center' gap='10px'>
                            <Text onClick={showAddGroupModal}>
                                <EditNoteIcon fontSize='medium' cursor='pointer'/>
                            </Text>
                            <Text onClick={showBlockMessage}>
                                <BlockIcon fontSize='medium' cursor='pointer' />
                            </Text>
                        </Flex>
                    </Flex> :
                    ''
            }
        </>
    );
};

export default GroupItem;