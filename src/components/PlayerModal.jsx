import React from 'react';
import {
    Button,
    Flex, Link, List, ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import {useConversation} from "../store";
import Player from "./Player";


const PlayerModal = () => {
    const playerModal = useConversation((state) => state.playerModal);
    const hidePlayerModal = useConversation((state) => state.hidePlayerModal);
    const currentRecord = useConversation((state) => state.currentRecord);
    const showDownloadRecord = useConversation((state) => state.showDownloadRecord);
    const deleteCurrentRecord = useConversation((state) => state.deleteCurrentRecord);
    const showDeleteSuccessModal = useConversation((state) => state.showDeleteSuccessModal);

    function deleteRecord(id) {
        deleteCurrentRecord(id);
        showDeleteSuccessModal()
    }
    return (
        <Modal isOpen={playerModal} onClose={hidePlayerModal}  size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Проигрыватель</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex flexDirection='column' gap='50px'>
                        <Player />
                        <Flex flexDirection='column' gap='20px'>
                            <Text>Информация о звонке</Text>
                            <List>
                                <ListItem>Дата вызова : 12-12-2020</ListItem>
                                <ListItem>Время вызова : 12-00</ListItem>
                                <ListItem>Номер вызывающего абонента : {currentRecord[0]?.callingNum}</ListItem>
                                <ListItem>ОСТ вызывающего абонента : {currentRecord[0]?.callingOst}</ListItem>
                                <ListItem>Номер отвечающего абонента : {currentRecord[0]?.answerNum}</ListItem>
                                <ListItem>ОСТ отвечающего абонента : {currentRecord[0]?.answerOst}</ListItem>
                                <ListItem>Длительность записи : {currentRecord[0]?.duration}</ListItem>
                            </List>
                        </Flex>
                        <Flex justifyContent='space-between'>
                            <Button type='button' onClick={showDownloadRecord}>
                                Выгрузить запись
                            </Button>
                            <Button type='button' onClick={()=> deleteRecord(currentRecord[0]?.id)}>Удалить запись</Button>
                            <Button type='button' onClick={hidePlayerModal}>Закрыть</Button>
                        </Flex>
                    </Flex>

                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default PlayerModal;