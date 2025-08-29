import Product from "./Product"
import './Productlist.css'
import Cart from "./Cart"
import { useEffect, useState } from "react"
export default function ProductList() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const increaseCartCount = (product)=>{

        setCart(prevCart=>{
            const existing = prevCart.find(item=> item.id === product.id )
            if(existing){
                // alert('true')
                return prevCart.map(item=>
                    item.id === product.id ? {...item, quantity: item.quantity+1 , totalPrice: item.price*(item.quantity+1)} : item
                )
            }
           return [...prevCart, {...product, quantity:1, totalPrice: product.price}]
        })
    }
    const decreaseCartCount = (product)=>{

        setCart(prevCart=>{
            return prevCart.map(item=>
                item.id === product.id ? {...item, quantity: item.quantity-1,totalPrice: item.price*(item.quantity-1)} : item
            ).filter(item=> item.quantity > 0)
        })
    }
    

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }
    , [])
    // useEffect(() => {
    //     console.log(cart)}
    // , [cart])
    return (
        <div className="product-list">
            <div>
            <h1>Desserts</h1>
            <div className="products">
                {products.map(product => (
                    <Product 
                    key={product.id} 
                    product={product} 
                    cart={cart}
                    increaseCartCount={increaseCartCount} 
                    decreaseCartCount={decreaseCartCount}
                />
                ))}
            </div>
            </div>
            <Cart cart={cart} />

        </div>
    )
}
