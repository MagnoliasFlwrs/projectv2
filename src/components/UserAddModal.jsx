import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useDisclosure
} from "@chakra-ui/react";


export default function UserAddModal({isOpen}){
    const { onClose } = useDisclosure()
    return  (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Внимание</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Пользователь успешно добавлен
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose} >
                        Продолжить
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}