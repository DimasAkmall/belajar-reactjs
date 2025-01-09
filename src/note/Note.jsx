import { useState } from "react"

export default function Note({ note, onChange, onDelete }) {
    const [isEditing, setEditing] = useState(false)
    let component

    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value }
        onChange(newNote)
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
        const newNote = { ...note, done: e.target.checked }
        onChange(newNote)
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={() => onDelete(note)}>Delete</button>
        </label>
    )
}
