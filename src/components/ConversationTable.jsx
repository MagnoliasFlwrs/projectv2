import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library/table";
import {useTheme} from "@table-library/react-table-library/theme";
import {HeaderCellSort, useSort} from "@table-library/react-table-library/sort";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { usePagination } from "@table-library/react-table-library/pagination";
import * as React from "react";
import {Flex, useDisclosure} from "@chakra-ui/react";
import ConversationFilterModal from "./ConversationFilterModal";
import {useConversation} from "../store";
import DownloadRecord from "./DownloadRecord";
import PlayerModal from "./PlayerModal";
import DownloadRecordSuccessModal from "./DownloadRecordSuccessModal";
import DeleteRecordSuccessModal from "./DeleteRecordSuccessModal";


export default function ConversationTable() {
    const { isOpen } = useDisclosure();
    const showFilterModal = useConversation((state) => state.showFilterModal);
    const showDownloadRecord = useConversation((state) => state.showDownloadRecord);
    const nodes = useConversation((state) => state.records);
    const showPlayerModal = useConversation((state) => state.showPlayerModal);
    const setCurrentRecord = useConversation((state) => state.setCurrentRecord);


    const theme = useTheme({
        Table: `
            border: 1px solid #000;
            max-height:500px;
            overflow-y: scroll;
        `,
        HeaderRow: `
        text-align: center;
        background-color: #eaf5fd;
        .th {
          border-bottom: 1px solid #a0a8ae;
          
        }
        div {
        div {
        display:flex;
          justify-content:space-between;
        }}
      `,
        Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
        BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }
        height:25px;
        &{
        padding : 0 5px;
        }
        text-align: left;
      `,
    });
    const LIMIT = 2;

    const data = { nodes };

    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 10,
        },
        onChange: onPaginationChange,
    });
    function onPaginationChange(action, state) {
        console.log(action, state);
    }
    const sort = useSort(
        data,
        {
            onChange: onSortChange,
        },
        {
            sortIcon: {
                margin: "0px",
                iconDefault: <UnfoldMoreOutlinedIcon fontSize="small" />,
                iconUp: <KeyboardArrowUpOutlinedIcon fontSize="small" />,
                iconDown: <KeyboardArrowDownOutlinedIcon fontSize="small" />,
            },
            sortFns: {
                DATE: (array) => array.sort((a, b) => a.date - b.date),
                CALLINGNUM: (array) => array.sort((a, b) => a.callingNum - b.callingNum),
                CALLINGOST: (array) => array.sort((a, b) => a.callingOst - b.callingOst),
                ANSWERNUM: (array) => array.sort((a, b) => a.answerNum - b.answerNum),
                ANSWEROST: (array) => array.sort((a, b) => a.answerOst - b.answerOst),
                DURATION: (array) => array.sort((a, b) => a.duration - b.duration),

            },
        }
    );

    function onSortChange(action, state) {
        console.log(action, state);
    }
    function recordClick(id){
        setCurrentRecord(id);
        showPlayerModal()
    }
    return (
        <Flex display='flex' flexDirection='column' justifyContent='space-between' flex='1 0 0' gap='30px'>

            <Table data={data} sort={sort} width='100%'  theme={theme} pagination={pagination}>
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCellSort sortKey="DATE">Дата Время</HeaderCellSort>
                                <HeaderCellSort sortKey="CALLINGNUM">Вызывающий номер</HeaderCellSort>
                                <HeaderCellSort sortKey="CALLINGOST">ОСТ ВН</HeaderCellSort>
                                <HeaderCellSort sortKey="ANSWERNUM">Отвечающий номер</HeaderCellSort>
                                <HeaderCellSort sortKey="ANSWEROST">ОСТ ОН</HeaderCellSort>
                                <HeaderCellSort sortKey="DURATION">Длительность сек</HeaderCellSort>
                                <HeaderCell>Действия</HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row item={item} key={item.id} onClick={()=> recordClick(item.id)}>
                                    <Cell>
                                        {item.date.toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                        })}
                                    </Cell>
                                    <Cell>{item.callingNum}</Cell>
                                    <Cell>{item.callingOst}</Cell>
                                    <Cell>{item.answerNum}</Cell>
                                    <Cell>{item.answerOst}</Cell>
                                    <Cell>{item.duration}</Cell>
                                    <Cell>{item.actions}</Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ cursor: 'pointer' }} onClick={showFilterModal}>
                  <FilterAltIcon/>
                </span>
                <button style={{ cursor: 'pointer' , border: '1px solid #000' , padding: '5px 15px' , fontSize: '14px' }}
                onClick={showDownloadRecord}>
                    Скачать все отфильтрованные записи
                </button>
                <span>
                  Page:{' '}
                    {pagination.state.getPages(data.nodes).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{
                                fontWeight:
                                    pagination.state.page === index
                                        ? 'bold'
                                        : 'normal',
                            }}
                            onClick={() => pagination.fns.onSetPage(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </span>
            </div>
            <ConversationFilterModal isOpen={isOpen}/>
            <DownloadRecord/>
            <PlayerModal/>
            <DownloadRecordSuccessModal/>
            <DeleteRecordSuccessModal/>
        </Flex>

    )
}