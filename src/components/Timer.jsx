import React, { useState , useEffect } from 'react'
import { Hide, Show, Text , ScaleFade ,useDisclosure } from '@chakra-ui/react';
import useAuth from "../store";

const useCountdown = (onDone, initialSeconds) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [timeout, _setTimeout] = useState()

    const countDown = () => {
        setSeconds((prev) => prev - 1);
    };

    const runTimer = () => {
        if (seconds === 0) return onDone();
        const timer = setTimeout(() => {
            countDown();
        }, 1000);
        _setTimeout(timer);
    };

    useEffect(() => {
        runTimer();
    }, [seconds]);

    return { seconds };
};



export default function Timer() {
    const { onOpen,onClose } = useDisclosure()
    const { seconds } = useCountdown(onDone, 10);
    const [hideStatus, setHideStatus] = useState(false);
    const errorEnterCounter =  useAuth((state)=> state.errorEnterCounter);
    const resetErrorEnterCounter =  useAuth((state)=> state.resetErrorEnterCounter)
    function onDone() {
        setHideStatus(true);
        resetErrorEnterCounter();
    }

    return (
        <>
            {
                hideStatus && errorEnterCounter !== 3 ?
                    <ScaleFade initialScale={0.9} in={onOpen}>
                        <Hide>
                            <div className='blocker-timer'>
                                <Text>Повторная попытка авторизации через {seconds} секунд</Text>
                            </div>
                        </Hide>
                    </ScaleFade>
                    :
                    <ScaleFade initialScale={0.9} in={onClose}>
                        <Show>
                            <div className='blocker-timer'>
                                <Text textAlign='center'>Внимание! Вход в систему заблокирован! <br/> Повторная попытка авторизации через {seconds} секунд</Text>
                            </div>
                        </Show>
                    </ScaleFade>

            }
        </>

    );
}
