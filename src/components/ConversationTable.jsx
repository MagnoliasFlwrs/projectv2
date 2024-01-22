import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library/table";
import {useTheme} from "@table-library/react-table-library/theme";
import {HeaderCellSort, useSort} from "@table-library/react-table-library/sort";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import * as React from "react";


export default function ConversationTable() {
    const nodes = [
        {
            date :new Date(2020, 1, 18),
            callingNum : '123-11-11',
            callingOst : 1,
            answerNum : '147-88-52',
            answerOst: 2,
            duration : '85s',
            actions : 'action'
        },
        {
            date :new Date(2020, 1, 27),
            callingNum : '122-11-11',
            callingOst : 5,
            answerNum : '197-88-52',
            answerOst: 3,
            duration : '41s',
            actions : 'action'
        },
    ]
    const theme = useTheme({
        Table: `
            border: 1px solid #000
        `,
        HeaderRow: `
        text-align: center;
        .th {
          border-bottom: 1px solid #a0a8ae;
          
        }
        div {
        div {
        display:flex;
          justify-content:space-between;
        }}
      `,
        BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }
        &{
        padding : 0 5px;
        }
        text-align: left;
      `,
    });
    const data = { nodes };
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
    return (
        <Table data={data} sort={sort} width='100%'  theme={theme} >
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
                            <Row item={item} key={item.id}>
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
    )
}