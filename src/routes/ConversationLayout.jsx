import {Flex, Text} from "@chakra-ui/react";
import ConversationTable from "../components/ConversationTable";

export default function ConversationLayout() {
    return (
        <Flex width='100%' flexDirection='column' alignItems='center' gap='20px' paddingBottom='50px' flex='1 0 0'>
            <Text fontSize='20px'>Журнал записей переговоров</Text>
            <Flex flex='1 0 0' flexDirection='column' width='100%' gap='30px' justifyContent='space-between'>
                <ConversationTable/>
            </Flex>

        </Flex>
    )
}