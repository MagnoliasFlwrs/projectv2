import React from 'react';
import {
    Button,
    Flex,
    Input, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import {useGroupsAndUsers} from "../store";

const BlockMessage = () => {
    const blockMessage = useGroupsAndUsers((state) => state.blockMessage);
    const hideBlockMessage = useGroupsAndUsers((state) => state.hideBlockMessage);
    return (
        <Modal isOpen={blockMessage} onClose={hideBlockMessage} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Уведомление</ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' flexDirection='column' gap='30px' paddingBottom='50px'>
                    <Text>Вы действительно хотите заблокировать группу?</Text>
                </ModalBody>
                <ModalFooter gap='30px'>
                    <Button type='button' onClick={hideBlockMessage}>ОК</Button>
                    <Button type='button' onClick={hideBlockMessage}>Отмена</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default BlockMessage;