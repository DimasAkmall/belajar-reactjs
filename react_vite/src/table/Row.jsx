// Un-Pure Component/Function

// let counter = 0

// export default function Row({ text }) {
//     counter++
//     return (
//         <tr>
//             <td>{counter}</td>
//             <td>{text}</td>
//         </tr>
//     )
// }

// Pure Component/Function

export default function Row({ id, text }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}
