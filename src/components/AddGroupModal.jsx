import React, {useState} from 'react';
import {useGroupsAndUsers} from "../store";
import {
    Button, Flex, Input, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Text
} from "@chakra-ui/react";

const AddGroupModal = () => {
    const addGroupModal = useGroupsAndUsers((state) => state.addGroupModal);
    const addGroup = useGroupsAndUsers((state) => state.addGroup);
    const hideAddGroupModal = useGroupsAndUsers((state) => state.hideAddGroupModal);

    const [inputValue , setInputValue] =useState('')
    function changeText(event) {
        setInputValue(event.target.value);
    }
    function addNewGroup(inputValue) {
        hideAddGroupModal();
        addGroup(inputValue);
        setInputValue('');
    }
    return (
        <Modal isOpen={addGroupModal} onClose={hideAddGroupModal} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Добавление (редактирование) группы</ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' flexDirection='column' gap='30px' paddingBottom='50px'>
                    <Flex width='100%' justifyContent='space-between' alignItems='center' gap='20px'>
                        <Text>Наименование</Text>
                        <Input value={inputValue} onChange={changeText}/>
                    </Flex>
                    <Flex width='100%' justifyContent='flex-end' alignItems='center' gap='20px'>
                        <Button type='button' onClick={() => addNewGroup(inputValue)}>Применить</Button>
                        <Button type='button' onClick={hideAddGroupModal}>Отменить</Button>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddGroupModal;