import React from 'react';
import NumbersItem from "./NumbersItem";
import {useGroupsAndUsers} from "../store";

const NumbersItems = ({currentItems}) => {
    const numbers = useGroupsAndUsers((state) => state.numbers);
    return (
        <>
            {
                currentItems ?
                    currentItems.map((item ,i) =>
                        <NumbersItem key={i} item={item}/>
                    )
                    :
                    ''
            }
        </>

    );
};

export default NumbersItems;