import React, {useEffect, useState} from 'react';
import useSound from "use-sound";
import song from '../benny-benassi-feat-dhany-hit-my-heart.mp3'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseIcon from '@mui/icons-material/Pause';
import {Button, Flex} from "@chakra-ui/react";
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useConversation} from "../store";

const Player = () => {

    const currentRecord = useConversation((state) => state.currentRecord);
    console.log(currentRecord[0])

    return (
        <AudioPlayer
            src={currentRecord[0]?.src}
            customControlsSection={
                [
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                ]
            }
        />
    );
};

export default Player;