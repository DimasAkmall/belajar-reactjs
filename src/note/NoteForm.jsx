import { useContext, useState } from "react"
import { NotesDispatchContext } from "./NoteContext"

// export default function NoteForm({ onAddNote }) { // Without Context Reducer
export default function NoteForm() {
    // Using Context Reducer
    const [text, setText] = useState("")
    const dispatch = useContext(NotesDispatchContext)

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        setText("")
        // onAddNote(text) // Without Context Reducer
        dispatch({
            //Useing Context Reducer
            type: "ADD_NOTE",
            text: text,
        })
    }

    return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}
