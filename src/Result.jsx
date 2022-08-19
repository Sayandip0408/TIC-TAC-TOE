import React from 'react';
import { quit, rematch } from './Game.js';
import { AiOutlineReload } from 'react-icons/ai'
import { GiCrossMark } from 'react-icons/gi'

const Result = () => {
    return (
        <div id='result_div'>
            <p id='match_result'></p>
            <p id='p1_win'></p>
            <p id='p2_win'></p>
            <button onClick={rematch}>Play Again <span><AiOutlineReload /></span> </button>
            <button onClick={quit}>Quit Game <span><GiCrossMark /></span></button>
        </div>
    );
}


export default Result;