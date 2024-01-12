import {Flex, Link , Text} from "@chakra-ui/react";



export default function Header() {
    return (
        <Flex  padding='20px 0' gap='50px' width='100%'>
            <Link>logo</Link>
            <Flex width='100%' flexDirection='column'>
                <Flex width='100%' justifyContent='flex-end' gap='20px'>
                    <Link paddingRight='20px' borderRight='1px' borderColor='#000' href='/user'>User Name</Link>
                    <Link paddingRight='20px' borderRight='1px' borderColor='#000' href='/reference'>Справка</Link>
                    <Text>Выход</Text>
                </Flex>
                <Flex width='100%' justifyContent='flex-start' gap='20px'>
                    <Link paddingRight='20px' borderRight='1px' borderColor='#000' href='/dashboard'>Главная</Link>
                    <Link paddingRight='20px' borderRight='1px' borderColor='#000' href='/convercation'>Журнал записей переговоров</Link>
                    <Link paddingRight='20px' borderRight='1px' borderColor='#000' href='/reports'>Отчеты</Link>
                    <Link  href='/settings'>Настройки</Link>
                </Flex>

            </Flex>

        </Flex>
    )
}