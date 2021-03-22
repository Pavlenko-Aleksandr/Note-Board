import { URL } from '../constants';

export function getNote() {
    return fetch(URL).then((res) => res.json());
}

export function editNote(note) {
    return fetch(URL + note.id, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function deleteNote(id) {
    return fetch(URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createNote(note) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
