import { useEffect, useRef, useState } from "react"
import Product from "./Product"

export default function ProductList() {
    const [products, setProducts] = useState([])
    // const loaded = useRef(false) //Apakah sudah pernah diload data pada render sebelumnya. default belum/false. Tanpa useRef infinite loop terjadi di console
    const [load, setLoad] = useState(false)

    function handleClick() {
        setLoad(true)
    }

    // Empty Array as dependencies untuk memuat effect 1 kali saja setelah render, default apabila tanpa dependencies akan dirender berulang kali dan bisa terjadi infinite loop
    useEffect(() => {
        console.log("Tes Empty Array in Depedencies Parameter on useEffect()")
    }, [])

    // useEffect(() => {
    //     // console.log("Call Use Effect")
    //     // Use useRef()
    //     // if (loaded.current === false) {

    //     // Without useRef but use dependencies parameter from useEffect
    //     if (load) {
    //         fetch("/products.json")
    //             .then((response) => response.json())
    //             .then((data) => setProducts(data))
    //         // .then(() => (loaded.current = true))  // Use useRef()
    //     }

    //     // Closure untuk melihat clean up effect. clean up terjadi 2 kali karna dilakukan dalam mode strict mode sehingga dirender 2 kali dan dipanggil effect 2 kali. apabila terdapat efek lanjutan dari effek saat ini tentu akan dilakukan clean up otomatis terlebih dahulu
    //     // return () => {
    //     //     console.log("Product List Component Unmounted")
    //     // }
    //     // })  // Use useRef()
    // }, [load])

    // Use Async - react default is not support to do async await, .fetch is e promise not a async
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/products.json")
            const data = await response.json()
            setProducts(data)
        }

        if (load) {
            fetchProducts()
        }
    }, [load])

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Klik Untuk Menampilkan Product</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}
