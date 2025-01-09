import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import CounterApp from "./CounterApp"
import Counter from "./Counter"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CounterApp />
    </StrictMode>
)
