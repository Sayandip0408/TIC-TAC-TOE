import React from 'react';
import Welcome from './Welcome';
import { Name } from './Name';
import GameBoard from './GameBoard';
import Result from './Result';
import { CompName } from './CompName';
import CompGameBoard from './CompGameBoard';
import CompResult from './CompResult';

const MainSec = () => {
    return (
        <section id='main'>
            <Welcome />
            <Name />
            <CompName />
            <GameBoard />
            <CompGameBoard />
            <Result />
            <CompResult />
        </section>
    );
}

export default MainSec;