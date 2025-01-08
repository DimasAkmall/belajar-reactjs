import Todo from "./Todo"

export default function Todolist() {
    return (
        <ul>
            <Todo isCompleted={true} text="Learn HTML" isDeleted={true} />
            <Todo isCompleted={true} text="Learn CSS" />
            <Todo isCompleted={true} text="Learn JavaScript" />
            <Todo isCompleted={false} text="Learn ReactJS" />
        </ul>
    )
}
