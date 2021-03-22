import React from 'react';
import './Stiker.css';
import '../header/Header.css';


export default function TodoListItem({ onEdit, onDelete, stiker }) {
    function onEditStiker(e) {
        onEdit(stiker.id, e.target.value);
    };

    function onDeleteStiker(e) {
        e.stopPropagation();
        onDelete(stiker.id);
    };
    
    return (
        <div className="stiker">
            <button className="button" onClick={onDeleteStiker}>DELETE</button>
            <textarea className="textarea" defaultValue={stiker.description} id={stiker.id} onBlur={onEditStiker}/>
        </div>
    );
}