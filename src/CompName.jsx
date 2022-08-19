import React from 'react';
import { getNameComp } from './CompGame.js';

let player1, player2;
const game_start_comp = () => {
    player1 = document.getElementById('comp_player1').value;
    player2 = 'Computer';
    console.log(player1 + " " + player2);
    let player_name_div = document.getElementById('comp_player_name_div');
    let gameboard = document.getElementById('comp_gameboard');
    player_name_div.style.display = 'none';
    gameboard.style.display = 'block';
    getNameComp(player1, player2);
}

const CompName = () => {
    return (
        <div id='comp_player_name_div'>
            <h1>Enter Player Names</h1>
            <div id='comp_player_form'>
                <input id='comp_player1' placeholder='Enter your name' />
                <button id='comp_play' onClick={game_start_comp}>Play</button>
            </div>
        </div>
    );
}

export { CompName, player1, player2 };