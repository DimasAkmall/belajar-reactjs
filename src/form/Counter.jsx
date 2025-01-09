// USE LOCAL VARIABLE NOT useStat e
import { useState } from "react"

// export default function Counter() {
//     let counter = 0

//     function handleClick() {
//         counter++
//         console.log(counter)
//     }

//     return (
//         <div>
//             <div>
//                 <button onClick={handleClick}>Increment</button>
//             </div>

//             <h1>Counter: {counter}</h1>
//         </div>
//     )
// }

// USE useState
export default function Counter() {
    let [counter, setCounter] = useState(0)

    function handleClick() {
        // Normally
        // setCounter(counter + 3)

        // Lamda
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        console.log(counter)
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <h1>Counter: {counter}</h1>
        </div>
    )
}
