import React from 'react';
import { getName } from './Game.js';

let player1, player2;
const game_start = () => {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
    console.log(player1 + " " + player2);
    let player_name_div = document.getElementById('player_name_div');
    let gameboard = document.getElementById('gameboard');
    player_name_div.style.display = 'none';
    gameboard.style.display = 'block';
    getName(player1, player2);
}

const Name = () => {
    return (
        <div id='player_name_div'>
            <h1>Enter Player Names</h1>
            <div id='player_form'>
                <input id='player1' placeholder='Enter name of first player' />
                <input id='player2' placeholder='Enter name of second player' />
                <button id='play' onClick={game_start}>Play</button>
            </div>
        </div>
    );
}

export { Name, player1, player2 };