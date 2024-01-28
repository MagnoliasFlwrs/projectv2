import React from 'react';
import {
    Button, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import {useConversation} from "../store";

const DeleteRecordSuccessModal = () => {
    const deleteSuccessModal = useConversation((state) => state.deleteSuccessModal);
    const hideDeleteSuccessModal = useConversation((state) => state.hideDeleteSuccessModal);
    const hidePlayerModal = useConversation((state) => state.hidePlayerModal);

    function closeModal() {
        hideDeleteSuccessModal();
        hidePlayerModal()
    }
    return (
        <Modal isOpen={deleteSuccessModal} onClose={closeModal}  size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Уведомление</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Удаление записи успешно завершено</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeModal}>Закрыть</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteRecordSuccessModal;