import Todo from "./Todo"

export default function Todolist() {
    const data = [
        {
            id: 0,
            text: "Learn HTML",
            isCompleted: true,
        },
        {
            id: 1,
            text: "Learn CSS",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Learn JavaScript",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Learn ReactJS",
            isCompleted: false,
        },
    ]

    // const todos = data.map((todo) => <Todo key={todo.id} {...todo} />)
    return (
        // <ul>
        //     <Todo isCompleted={true} text="Learn HTML" isDeleted={true} />
        //     <Todo isCompleted={true} text="Learn CSS" />
        //     <Todo isCompleted={true} text="Learn JavaScript" />
        //     <Todo isCompleted={false} text="Learn ReactJS" />
        // </ul>

        // <ul>{todos}</ul>

        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}
