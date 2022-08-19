import React from 'react';
import { GiCrossMark } from 'react-icons/gi';
import { BsCircle } from 'react-icons/bs';
import { scopes_comp } from './CompGame';

const comp_scope = (val) => {
    return (
        <div id={val.id} className="scope_div" onClick={val.function}>
            <div id={val.child1} className='scope_child'><GiCrossMark /></div>
            <div id={val.child2} className='scope_child'><BsCircle /></div>
        </div>
    );
}

const CompGameBoard = () => {
    return (
        <div id='comp_gameboard'>
            <p id='comp_x_p'></p>
            <p id='comp_o_p'></p>
            <p id='comp_turn'></p>
            <div id='comp_board'>
                {scopes_comp.map(comp_scope)}
            </div>
        </div>
    );
}

export default CompGameBoard;