import React from 'react';
import Stiker from '../stiker/Stiker';
import './Main.css';

export default function Main({ stikers, onEdit, onDelete }) {
    return (
        <main className="main">
            {stikers.map((stiker) => (
                <Stiker
                    key={stiker.id}
                    stiker={stiker}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </main>
    );
}
