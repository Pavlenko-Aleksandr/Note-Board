import React from 'react';
import Main from '../main/Main';
import Header from '../header/Header';
import { useStikers } from '../../hooks';
import './Board.css';

export default function Board() {
    const {stikers, createStiker, editStiker, deleteStiker} = useStikers();

    return (
        <div className="board">
            <Header onAdd={createStiker}/>
            <Main
                stikers={stikers}
                onEdit={editStiker}
                onDelete={deleteStiker}
            />
        </div>
    )
}