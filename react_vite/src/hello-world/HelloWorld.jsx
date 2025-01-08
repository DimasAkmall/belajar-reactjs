export default function HelloWorld() {
    const props = {
        text: "Ini text dari props",
    }
    return (
        <>
            {/* <HeaderHelloWorld text="Hello World" /> */}
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </>
    )
}

// export default HelloWorld;

function HeaderHelloWorld({ text = "Forget to give PROPS teks" }) {
    return (
        <h1
            style={{
                color: "black",
                background: "salmon",
            }}>
            {text.toUpperCase()}
        </h1>
    )
}

function ParagraphHelloWorld() {
    const text = "I'm Learning React Now!"
    return (
        <p
            style={{
                color: "red",
            }}>
            {text.toLowerCase()}
        </p>
    )
}
