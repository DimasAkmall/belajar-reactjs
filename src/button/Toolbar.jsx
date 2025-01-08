export default function Toolbar({ onClick }) {
    return (
        <div onClick={onClick} style={{ backgroundColor: "greenyellow" }}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}
