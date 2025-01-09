import { createRoot } from "react-dom/client"
import HelloWorld from "./HelloWorld"
import { StrictMode } from "react"
import Container from "./Container"
import Todolist from "../todolist/Todolist"
import Table from "../table/Table"
import AlertButton from "../button/AlertButton"
import MyButton from "../button/MyButton"
import Toolbar from "../button/Toolbar"
import SearchForm from "../form/SearchForm"
import SayHelloForm from "../form/SayHelloForm"
import Counter from "../form/Counter"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <Todolist />
            <Table />

            <AlertButton text="Click Me" message="You Clicked Me" />
            <MyButton text="Smash Me" onSmash={() => alert("You Smashed Me")} />

            <Toolbar
                onClick={(e) => {
                    // PROPAGATION = comment below and click the greenyellow div and button to see the different
                    e.stopPropagation()
                    alert("You clicked Toolbar")
                }}
            />

            <SearchForm />

            <SayHelloForm />

            <Counter />
            <Counter />
            <Counter />
        </Container>
    </StrictMode>
)
