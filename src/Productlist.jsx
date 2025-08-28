import Product from "./Product"
import './Productlist.css'
import { useEffect, useState } from "react"
export default function ProductList() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const addToCart = (product)=>{
        setCart(prevCart=>{
            const existing = prevCart.find(item=>{
                item.id=== product.id ? {...item, quantity: item.quantity+1} : item
            })
           return [...prevCart,{...product, quantity:1}]
        })
    }
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="product-list">
            <div>
            <h1>Desserts</h1>
            <div className="products">
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart= {addToCart}/>
                ))}
            </div>
            </div>

            <div className="cart">
                <h2>Shopping Cart</h2>

            </div>
        </div>
    )
}
