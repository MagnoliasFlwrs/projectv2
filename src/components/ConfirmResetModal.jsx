import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {useConversation} from "../store";
import React from "react";

export default function ConfirmResetModal() {
    const confirmReset = useConversation((state) => state.confirmReset);
    const hideConfirmReset = useConversation((state) => state.hideConfirmReset);
    const isResetFilter = useConversation((state) => state.isResetFilter);
    return (
        <Modal isOpen={confirmReset} onClose={hideConfirmReset} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Вопрос</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Вы действительно хотите очистить фильтр?
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={isResetFilter} >
                        Да
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={hideConfirmReset } >
                        Нет
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}