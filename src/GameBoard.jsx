import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import { BsCircle } from 'react-icons/bs';
import { scopes } from './Game';

const scope = (val) => {
    return (
        <div id={val.id} className="scope_div" onClick={val.function}>
            <div id={val.child1} className='scope_child'><GiCrossMark /></div>
            <div id={val.child2} className='scope_child'><BsCircle /></div>
        </div>
    );
}

const GameBoard = () => {
    return (
        <div id='gameboard'>
            <p id='x_p'></p>
            <p id='o_p'></p>
            <p id='turn'></p>
            <div id='board'>
                {scopes.map(scope)}
            </div>
        </div>
    );
}

export default GameBoard;