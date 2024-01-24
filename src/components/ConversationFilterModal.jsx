import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import CloseIcon from '@mui/icons-material/Close';
import {useConversation} from "../store";
import ConversationFilterForm from "./ConversationFilterForm";



export default function ConversationFilterModal() {
    const filterModal = useConversation((state) => state.filterModal);
    const hideFilterModal = useConversation((state) => state.hideFilterModal);
    return (
        <Modal isOpen={filterModal} onClose={hideFilterModal} size='800px'>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader width='100%' display='flex' justifyContent='space-between' borderBottom='1px solid #000' >
                    <span>Настройка фильтрации данных</span>
                    <span onClick={hideFilterModal} style={{cursor:'pointer'}}>
                    <CloseIcon/>
                </span>
                </ModalHeader>
                <ModalBody>
                    <ConversationFilterForm/>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}