import Row from "./Row"

// Un-Pure Component/Function

// export default function Table() {
//     return (
//         <table border="1">
//             <tbody>
//                 <Row text="Satu" />
//                 <Row text="Dua" />
//                 <Row text="Tiga" />
//             </tbody>
//         </table>
//     )
// }

// REKOMENDASI
// Pure Component/Function
export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="Satu" />
                <Row id="2" text="Dua" />
                <Row id="3" text="Tiga" />
            </tbody>
        </table>
    )
}
