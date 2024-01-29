import React, {useState} from 'react';
import {Button, Flex, Text} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import {useGroupsAndUsers} from "../store";
import NumbersItem from "./NumbersItem";
import ReactPaginate from 'react-paginate';
import NumbersItems from "./NumbersItems";

const NumbersBlock = () => {
    const addNumbers = useGroupsAndUsers((state) => state.addNumbers);
    let itemsPerPage = 4
    const numbers = useGroupsAndUsers((state) => state.numbers);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = numbers?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(numbers?.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % numbers?.length;
        setItemOffset(newOffset);
    };

    return (
        <Flex position='relative' width='100%'
              padding='20px 0' border='1px solid #000000'
              flexDirection='column' justifyContent='space-between'>

            <Text position='absolute' top='-14px'
                  left='10px' background='#fff' padding='0 10px'>Диапазон номеров</Text>

            <Flex height='200px' overflowY='auto' padding='20px' width='100%' flexDirection='column' gap='10px'>
                <NumbersItems currentItems={currentItems} />
            </Flex>

            <Flex padding='20px 20px 0' width='100%' justifyContent='space-between'>
                <Button display='flex'
                        gap='10px' size='md'
                        width='fit-content'
                        onClick={addNumbers}
                ><AddIcon/> Добавить диапазон</Button>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Следующая >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Предыдущая"
                    renderOnZeroPageCount={null}
                    className='pagination'
                />
            </Flex>

        </Flex>
    );
};

export default NumbersBlock;