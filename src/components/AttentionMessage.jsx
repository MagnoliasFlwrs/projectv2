import React from 'react'
import {Text} from "@chakra-ui/react";
import useAuth from "../store";

export default function AttentionMessage() {
    const attentionMessage = useAuth((state) => (state.attentionMessage))
    return (
        <Text>{attentionMessage}</Text>
    )
}