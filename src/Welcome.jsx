import React from 'react';

const inputPlayerName = () => {
    let welcome = document.getElementById('welcome_div');
    let name = document.getElementById('player_name_div');
    welcome.style.display = 'none';
    name.style.display = 'block';
}
const inputCompPlayerName = () => {
    let welcome = document.getElementById('welcome_div');
    let name = document.getElementById('comp_player_name_div');
    welcome.style.display = 'none';
    name.style.display = 'block';
}

const Welcome = () => {
    return (
        <div id='welcome_div'>
            <h1>Hello & Welcome</h1>
            <button id='start_game_btn' onClick={inputPlayerName}>vs Friend</button>
            <button id='highest_score_btn' onClick={inputCompPlayerName}>vs Computer</button>
            <p>Press the <span>Start</span> button to play game</p>
            <p>To see the highest score click on the <span>Highest Score</span> button</p>
        </div>
    );
}

export default Welcome;