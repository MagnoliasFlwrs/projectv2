import {Flex, Text} from "@chakra-ui/react";
import ConversationTable from "../components/ConversationTable";

export default function ConversationLayout() {
    return (
        <Flex width='100%' flexDirection='column' alignItems='center' gap='50px' paddingBottom='100px'>
            <Text fontSize='30px'>Журнал записей переговоров</Text>
            <ConversationTable/>
        </Flex>
    )
}