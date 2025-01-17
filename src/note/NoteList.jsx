import Note from "./Note"
import { useContext, useMemo, useRef, useState } from "react"
import { NotesContext } from "./NoteContext"

// export default function NoteList({ notes, onChange, onDelete }) { // Without Context Reducer
export default function NoteList() {
    // Using Context Reducer
    const notes = useContext(NotesContext) // Using Context Reducer
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    const filteredNotes = useMemo(() => {
        console.info("Filtering notes")
        return notes.filter((note) => note.text.includes(search))
    }, [notes, search])

    function handleClick() {
        console.info("Search", searchInput.current.value)
        setSearch(searchInput.current.value)
    }

    return (
        <div>
            <input ref={searchInput} placeholder="Search" />
            <button onClick={handleClick}>Search</button>
            <ul>
                {filteredNotes.map((note) => (
                    <li key={note.id}>
                        {/* // Without Context Reducer */}
                        {/* <Note note={note} onChange={onChange} onDelete={onDelete} /> */}
                        {/* // Using Context Reducer */}
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
