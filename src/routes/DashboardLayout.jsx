
import {Flex} from "@chakra-ui/react";
import {DataChart} from "../components/DataChart";

export default function DashboardLayout()  {
    return (
        <Flex justifyContent='center' gap='150px'>
            <Flex width='500px' >
                <DataChart/>
            </Flex>
            <Flex width='500px'>
                <DataChart/>
            </Flex>


        </Flex>
    )
}