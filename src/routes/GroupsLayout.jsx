import React from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import GroupItem from "../components/GroupItem";
import {useGroupsAndUsers} from "../store";
import AddIcon from '@mui/icons-material/Add';
import AddGroupModal from "../components/AddGroupModal";
import BlockMessage from "../components/BlockMessage";
import GroupBlock from "../components/GroupBlock";
import NumbersBlock from "../components/NumbersBlock";

const GroupsLayout = () => {

    return (
        <Flex width='100%' flexDirection='column' alignItems='center' gap='30px' paddingBottom='100px'>
            <Flex gap='50px' width='100%'>

                <GroupBlock/>
                <NumbersBlock/>
            </Flex>
            <AddGroupModal/>
            <BlockMessage/>
        </Flex>
    );
};

export default GroupsLayout;