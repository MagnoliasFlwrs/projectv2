import React from 'react';
import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import {useConversation} from "../store";

const DownloadRecordSuccessModal = () => {
    const downloadSuccessModal = useConversation((state) => state.downloadSuccessModal);
    const hideDownloadSuccessModal = useConversation((state) => state.hideDownloadSuccessModal);
    const hidePlayerModal = useConversation((state) => state.hidePlayerModal);
    const hideDownloadRecord = useConversation((state) => state.hideDownloadRecord);

    function closeModal() {
        hideDownloadSuccessModal();
        hideDownloadRecord()
        hidePlayerModal()
    }

    return (
        <Modal isOpen={downloadSuccessModal} onClose={closeModal}  size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Уведомление</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Выгрузка записи успешно завершена</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeModal}>Закрыть</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DownloadRecordSuccessModal;