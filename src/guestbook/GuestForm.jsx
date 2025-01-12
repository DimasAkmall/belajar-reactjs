// Halaman ini hanya untuk coba useRef di Componen, hasilnya alert tidak muncul

// - GAGAL
// export default function GuestForm({ name, setName }) {
// - BERHASIL
export default function GuestForm({ ref, name, setName }) {
    return (
        <>
            <label htmlFor="name">Name</label>
            <input ref={ref} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
        </>
    )
}
