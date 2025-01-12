import { useRef, useState } from "react"
import GuestForm from "./GuestForm"

export default function GuestBook() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const nameInput = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        setName("")
        setMessage("")

        nameInput.current.focus()

        alert(`Name: ${name}, Message: ${message}`)
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form>
                {/* // nb: useRef() hanya bisa digunakan untuk elemen dalam komponen, bukan untuk komponen */}
                {/* useRef di Element - BERHASIL*/}
                {/* <label htmlFor="name">Name</label>
                <input ref={nameInput} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br /> */}
                {/* useRef di Component - ERROR*/}
                {/* <GuestForm ref={nameInput} name={name} setName={setName} /> */}
                {/* useRef di Component alternatif supaya bisa - Berhasil*/}
                <GuestForm ref={nameInput} name={name} setName={setName} />
                <label htmlFor="message">Message</label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <br />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}
