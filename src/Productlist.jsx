import Product from "./Product"
import './Productlist.css'
import Cart from "./Cart"
import { useEffect, useState } from "react"
export default function ProductList() {
    const [products, setProducts] = useState([])
    const savedCart = ()=>{
        const getcart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(getcart) : [];
    }
    const [cart, setCart] = useState(savedCart)
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
    const increaseCartCount = (product)=>{

        setCart(prevCart=>{
            const existing = prevCart.find(item=> item.id === product.id )
            if(existing){
                return prevCart.map(item=>
                    item.id === product.id ? {...item,
                         sumTotal: prevCart.reduce((acc, item) => acc + item.totalPrice, 0), 
                         quantity: item.quantity+1 ,
                         totalPrice: item.price*(item.quantity+1)}
                         : item
                )
            }
           return [...prevCart, {...product,
            quantity:1,
            totalPrice: product.price,
            sumTotal: prevCart.reduce((acc, item) => acc + item.totalPrice, 0) + product.price}]
        })
    }
    const decreaseCartCount = (product)=>{

        setCart(prevCart=>{
            return prevCart.map(item=>
                item.id === product.id ? {...item, quantity: item.quantity-1,totalPrice: item.price*(item.quantity-1)} : item
            ).filter(item=> item.quantity > 0)
        })
    }
    const removeFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.filter(item => item.id !== product.id)
        })
    }

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }
    , [])
    
    return (
        <>
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
            <Cart cart={cart} removeFromCart={removeFromCart} />

        </div>

        </>
    )
}
