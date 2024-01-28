import {Flex, Text} from "@chakra-ui/react";
import ChangeAdminPasswordForm from "../components/ChangeAdminPasswordForm";
import ServerParamsForm from "../components/ServerParamsForm";
import ATCIntegration from "../components/ATCIntegration";

export default function SystemSettingsLayout() {
    return (
        <Flex flexDirection='column' alignItems='center' gap='50px' paddingBottom='100px'>
            <Text>Настройка системных параметров</Text>
            <ChangeAdminPasswordForm/>
            <ServerParamsForm/>
            <ATCIntegration/>
        </Flex>
    )
}