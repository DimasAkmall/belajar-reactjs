import { useState } from "react"
import Counter from "./Counter"

export default function CounterApp() {
    const [show2, setShow2] = useState(true)

    function handleChange(e) {
        setShow2(e.target.checked)
    }

    return (
        // <div>
        //     {/* MEMPERTAHANKAN STATE */}
        //     {/* State mengacu pada posisi componentnya contoh dibawah apabila counter 2 dihilangkan maka state dari posisi 2 juga hilang/dihapus*/}
        //     {/* <Counter name="Dimas" />
        //     {show2 && <Counter name="Akmal" />}
        //     <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2 */}
        //     {/* Contoh berikut mengganti counter 1 dengan counter 2, otomatis posisi counter 1 akan dipakai counter 2, dan karena counter 1 dan 2 merupakan component yang sama maka nilai state dari counter 1 yang digantikan dengan counter 2 akan sama atau counter 2 menggunakan state yang sama dengan counter 1 */}
        //     {/* {show2 ? <Counter name="Akmal" /> : <Counter name="Dimas" />}
        //     <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2 */}
        // </div>

        <div>
            {/* RESET STATE */}
            {/* Selain dengan menghilangkan komponen dari posisinya, juga bisa dengan mengganti dengan component lain pada posisi tersebut */}
            {/* {show2 ? <Counter name="Akmal" /> : <p>Hilang</p>}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2 */}
            {/* mengganti posisi parent komponen, misal parent awal div dipindah ke parent section */}
            {/* {show2 ? (
                <div>
                    <Counter name="Dimas" />
                </div>
            ) : (
                <section>
                    <Counter name="Akmal" />
                </section>
            )}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2 */}
            {/* memindahkan posisi komponen,contoh dibawah dikatakan berbeda posisi karena dari code berusaha menampilkan 2 komponen hanya disembunyikan bukan dihilangkan */}
            {/* {show2 && <Counter name="Dimas" />}
            {!show2 && <Counter name="Akmal" />}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2 */}
            {/* REKOMENDASI */}
            {/* dengan memberikan key sehingga react menganggap posisinya berbeda */}
            {show2 ? <Counter key="akmal" name="Akmal" /> : <Counter key="dimas " name="Dimas" />}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
        </div>
    )
}
