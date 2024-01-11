import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, useBoolean,
} from '@chakra-ui/react'
import useAuth from "../store";

export default function ErrorModal({isOpen, onOpen, onClose , error}) {
    const errorMessage = useAuth((state) => state.error)
    const showModal = useAuth((state) => state.showErrorModal)
    const hideModal = useAuth((state) => state.hideModal)


    return (
        <>

            <Modal isOpen={showModal} onClose={hideModal} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {errorMessage}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={hideModal } >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
