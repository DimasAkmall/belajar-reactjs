import { useEffect, useRef, useState } from "react"
import Product from "./Product"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const loaded = useRef(false) //Apakah sudah pernah diload data pada render sebelumnya. default belum/false. Tanpa useRef infinite loop terjadi di console

    useEffect(() => {
        // console.log("Call Use Effect")
        if (loaded.current === false) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => (loaded.current = true))
        }

        // Closure untuk melihat clean up effect. clean up terjadi 2 kali karna dilakukan dalam mode strict mode sehingga dirender 2 kali dan dipanggil effect 2 kali. apabila terdapat efek lanjutan dari effek saat ini tentu akan dilakukan clean up otomatis terlebih dahulu
        return () => {
            console.log("Product List Component Unmounted")
        }
    })

    return (
        <>
            <h1>Product List</h1>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}
