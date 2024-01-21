import * as React from "react";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { createTheme as createMaterialTheme } from "@mui/material/styles";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
} from "@table-library/react-table-library/table";
import {
    useSort,
    HeaderCellSort,
    SortIconPositions,
    SortToggleType,
} from "@table-library/react-table-library/sort";

import {nodes} from "../data";

const ReportsTable = () => {
    const data = { nodes };
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
                TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
                DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
                TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
                COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
                TASKS: (array) =>
                    array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
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
                            <HeaderCellSort sortKey="VENDOR">Device Vendor</HeaderCellSort>
                            <HeaderCellSort sortKey="PRODUCT">Device Product</HeaderCellSort>
                            <HeaderCellSort sortKey="VERSION">Device Version</HeaderCellSort>
                            <HeaderCellSort sortKey="SIGNATURE">Signature</HeaderCellSort>
                            <HeaderCellSort sortKey="NAME">Name</HeaderCellSort>
                            <HeaderCellSort sortKey="SEVERITY">Severity</HeaderCellSort>
                            <HeaderCellSort sortKey="EXTENSION">Extension</HeaderCellSort>
                            <HeaderCell>Owner</HeaderCell>
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
                                <Cell>{item.vendor}</Cell>
                                <Cell>{item.product}</Cell>
                                <Cell>{item.version}</Cell>
                                <Cell>{item.signature}</Cell>
                                <Cell>{item.name}</Cell>
                                <Cell>{item.severity}</Cell>
                                <Cell>{item.extension}</Cell>
                                <Cell>{item.owner}</Cell>
                            </Row>
                        ))}
                    </Body>
                </>
            )}
        </Table>
    );
};

export default ReportsTable;