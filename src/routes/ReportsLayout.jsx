import {Flex, Text} from "@chakra-ui/react";
import ReportsTable from "../components/ReportsTable";

export default function ReportsLayout() {
    return (
        <Flex width='100%' flexDirection='column' alignItems='center' gap='50px' paddingBottom='100px'>
            <Text fontSize='30px'>События системы</Text>
            <ReportsTable/>
        </Flex>
    )
}