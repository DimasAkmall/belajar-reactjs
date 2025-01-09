// import { useState } from "react"
import { useImmer } from "use-immer"

const initialdata = {
    name: "",
    message: "",
}

export default function ContactForm() {
    // const [contact, setContact] = useState(initialdata)
    const [contact, setContact] = useImmer(initialdata)

    function handleNameChange(e) {
        // setContact({
        //     ...contact,
        //     name: e.target.value,
        // })

        // immer
        setContact((draft) => {
            draft.name = e.target.value
        })
    }

    function handleMessageChange(e) {
        // setContact({
        //     ...contact,
        //     message: e.target.value,
        // })

        // immer
        setContact((draft) => {
            draft.message = e.target.value
        })
    }

    return (
        <>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </>
    )
}
