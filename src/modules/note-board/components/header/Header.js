import React from 'react';
import './Header.css';

export default function Header({ onAdd }) {
    function onAddStiker (e) {
        e.preventDefault();
        onAdd();
    };
    return (
        <header className="header">
            <button className="button" onClick={onAddStiker}>
                ADD
            </button>
        </header>
    )
}
