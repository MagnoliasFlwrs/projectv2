import React from 'react';
import {
    Button, Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Text
} from "@chakra-ui/react";
import {useConversation} from "../store";
import DownloadRecordForm from "./DownloadRecordForm";

const DownloadRecord = () => {
    const downloadRecord = useConversation((state) => state.downloadRecord);
    const hideDownloadRecord = useConversation((state) => state.hideDownloadRecord);

    return (
        <Modal isOpen={downloadRecord} onClose={hideDownloadRecord}  size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Выгрузка записи</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex position='relative' width='100%' padding='30px' border='1px solid #000000' marginTop='20px'>
                        <Text position='absolute'
                              top='-14px' left='30px'
                              background='#fff'
                              padding='0 10px'>Основание для выгрузки</Text>
                        <DownloadRecordForm/>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default DownloadRecord;