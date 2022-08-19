import React from 'react';
import { comp_rematch, comp_quit } from './CompGame.js';
import { AiOutlineReload } from 'react-icons/ai'
import { GiCrossMark } from 'react-icons/gi'

const CompResult = () => {
    return (
        <div id='comp_result_div'>
            <p id='comp_match_result'></p>
            <p id='comp_p1_win'></p>
            <p id='comp_p2_win'></p>
            <button onClick={comp_rematch}>Play Again <span><AiOutlineReload /></span> </button>
            <button onClick={comp_quit}>Quit Game <span><GiCrossMark /></span></button>
        </div>
    );
}


export default CompResult;