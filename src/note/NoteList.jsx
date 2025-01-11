import Note from "./Note"
import { useContext } from "react"
import { NotesContext } from "./NoteContext"

// export default function NoteList({ notes, onChange, onDelete }) { // Without Context Reducer
export default function NoteList() {
    // Using Context Reducer
    const notes = useContext(NotesContext) // Using Context Reducer
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    {/* // Without Context Reducer */}
                    {/* <Note note={note} onChange={onChange} onDelete={onDelete} /> */}
                    {/* // Using Context Reducer */}
                    <Note note={note} />
                </li>
            ))}
        </ul>
    )
}
