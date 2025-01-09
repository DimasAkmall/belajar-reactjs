// USE REDUCER (memusatkan aksi pada sebuah fungsi dan memangglnya dengan aksi yang diinginkan user)
import NoteForm from "./NoteForm"
import NoteList from "./NoteList"
import { useImmerReducer } from "use-immer"
// import { useReducer } from "react"

let id = 0
const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: false },
    { id: id++, text: "Learn JS", done: false },
    { id: id++, text: "Learn React", done: false },
]

// FUNCTION USED WHEN USE USEREDUCER
// function notesReducer(notes, action) {
//     switch (action.type) {
//         case "ADD_NOTE":
//             return [
//                 ...notes,
//                 {
//                     id: id++,
//                     text: action.text,
//                     done: false,
//                 },
//             ]
//         case "CHANGE_NOTE":
//             return notes.map((note) => (note.id === action.id ? { ...note, text: action.text, done: action.done } : note))
//         case "DELETE_NOTE":
//             return notes.filter((note) => note.id !== action.id)
//         default:
//             return notes
//     }
// }

// FUNCTION USED WHEN USE USEIMMERREDUCER
function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false,
        })
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id)
        notes[index].text = action.text
        notes[index].done = action.done
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id)
        notes.splice(index, 1)
    }
}

export default function NoteApp() {
    // USE REDUCER
    // const [notes, dispatch] = useReducer(notesReducer, initialNotes)

    // USE IMMER REDUCER
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes)

    function handleAddNote(text) {
        dispatch({
            type: "ADD_NOTE",
            text: text,
        })
    }

    function handleChangeNote(note) {
        dispatch({
            ...note, //Gunakan spread operator saja daripada buat satu persatu
            type: "CHANGE_NOTE",
            // id: note.id,
            // text: note.text,
            // done: note.done
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id,
        })
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </div>
    )
}

// WITHOUT REDUCER

// import { useImmer } from "use-immer"
// import NoteForm from "./NoteForm"
// import NoteList from "./NoteList"

// let id = 0
// const initialNotes = [
//     { id: id++, text: "Learn HTML", done: false },
//     { id: id++, text: "Learn CSS", done: false },
//     { id: id++, text: "Learn JS", done: false },
//     { id: id++, text: "Learn React", done: false },
// ]

// export default function NoteApp() {
//     const [notes, setNotes] = useImmer(initialNotes)

//     function handleAddNote(text) {
//         setNotes((draft) => {
//             draft.push({
//                 id: id++,
//                 text: text,
//                 done: false,
//             })
//         })
//     }

//     function handleChangeNote(note) {
//         setNotes((draft) => {
//             const index = draft.findIndex((item) => item.id === note.id)
//             draft[index] = note
//         })
//     }

//     function handleDeleteNote(note) {
//         setNotes((draft) => {
//             const index = draft.findIndex((item) => item.id === note.id)
//             draft.splice(index, 1)
//         })
//     }

//     return (
//         <div>
//             <h1>Note App</h1>
//             <NoteForm onAddNote={handleAddNote} />
//             <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
//         </div>
//     )
// }
