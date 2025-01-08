import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import HelloWorld from "./src/hello-world/HelloWorld"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                index: "index.html",
                hello_world: "hello-world.html",
            },
        },
    },
})
