import {Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {useConversation} from "../store";

export default function ConfirmResetModal() {
    const confirmReset = useConversation((state) => state.resetFilter);
    const hideConfirmReset = useConversation((state) => state.hideConfirmReset);
    return (
        <Modal isOpen={confirmReset} onClose={hideConfirmReset}>
            <ModalOverlay/>
            <ModalContent>

            </ModalContent>
        </Modal>
    )
}