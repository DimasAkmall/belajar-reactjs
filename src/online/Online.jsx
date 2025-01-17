import { useOnline } from "./OnlineHook"

export default function Online() {
    // Seharusnya kalau tidak connect internet berubah jadi offline (bingung juga kenapa ko ga mau berubah)
    const isOnline = useOnline()

    return (
        <>
            <h1>{isOnline ? "Online" : "Offline"}</h1>
        </>
    )
}
