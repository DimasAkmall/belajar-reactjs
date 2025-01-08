export default function Todo({ text, isCompleted, isDeleted = false }) {
    if (isDeleted) {
        return null
    } else {
        // return <li>{isCompleted ? <del>{text}</del> : text}</li>
        return (
            <li>
                {text} {isCompleted && "✔"}
            </li>
        )
    }
}
