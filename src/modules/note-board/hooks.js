import { useEffect, useState } from "react";
import { createNote, deleteNote, editNote, getNote } from "./services/service";

export function useStikers() {
    const [stikers, setStikers] = useState([]);
    useEffect (() => {
        getNote().then(setStikers);
    }, []);

    function editStiker (id, description) {
        const newStiker = {
            id,
            description,
        };
        editNote(newStiker).then(res => {
            setStikers(stikers.map((stiker) =>
                stiker.id !== res.id ? stiker : res
            ));
        });
    };

    function deleteStiker(id) {
        deleteNote(id);
        setStikers(stikers.filter((stiker) => stiker.id !== id));
    };

    function createStiker(stiker) {
        createNote(stiker).then((data) => {
            setStikers([...stikers, data]);
        });
    };

    return {
        stikers,
        setStikers,
        editStiker,
        deleteStiker,
        createStiker,
    }
}