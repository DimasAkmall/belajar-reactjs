import { useContext, useState } from "react"
import { NotesDispatchContext } from "./NoteContext"

// export default function Note({ note, onChange, onDelete }) { // Without Context Reducer
export default function Note({ note }) {
    const [isEditing, setEditing] = useState(false)
    const dispatch = useContext(NotesDispatchContext) // Using Context Reducer

    let component

    function handleChangeText(e) {
        // Without Context Reducer
        // const newNote = { ...note, text: e.target.value }
        // onChange(newNote)

        // Using Context Reducer
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.value,
        })
    }

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => setEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setEditing(true)}>Edit</button>
            </>
        )
    }

    function handleChangeDone(e) {
        // Without Context Reducer
        // const newNote = { ...note, done: e.target.checked }
        // onChange(newNote)

        // Using Context Reducer
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            done: e.target.checked,
        })
    }

    function handleDelete() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id,
        })
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            {/* // Without Context Reducer */}
            {/* <button onClick={() => onDelete(note)}>Delete</button> */}
            {/* // Using Context Reducer */}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}
