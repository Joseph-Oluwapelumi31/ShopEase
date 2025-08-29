import './Cart.css';
import { useState } from 'react';
import ConfirmOrder from './ConfirmOrder';
export default function Cart({ cart, removeFromCart}) {
    const [isConfirming, setIsConfirming] = useState(false);
    const showConfirmOrder = () => {
        setIsConfirming(true);
    };
    const remove = (product) => {
        removeFromCart(product);
    };
    return (

        <div className="cart">
            <h2 style={{ color: 'var(--color-red)' }}>Your Cart{cart.length > 0 ? ` (${cart.length})` : " is empty"}</h2>
            {cart.length !== 0 ? (
            <div className="cart-items">

                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                            
                            <div className="cart-item-details">
                                <div className='product-details'>
                                    <div className='product-info'>
                                        <h3 className='product-name'>{item.name}</h3>
                                        <div className="quantity-product-container">
                                            <p className='product-quantity'>{item.quantity}</p>
                                            <h2 className='product-price'>@${item.price}</h2>
                                            <p className='product-total'>${item.totalPrice}</p>
                                        </div>
                                    </div>

                                    <button className="remove-item-button" onClick={() => remove(item)}>
                                        <img src="assets/images/icon-remove-item.svg" alt="remove item" />
                                    </button>
                                </div>
                                <hr />
                            </div>
                            
                        </div>
                        
                ))}
                <div className="order-summary">
                    <div className="order-total-container">
                        <p className="order-total-label">Order Total</p>
                        <h3 className="order-total-amount">${cart.reduce((acc, item) => acc + item.totalPrice, 0)}</h3>
                    </div>
                    <div className="carbon-neutral">
                        <img src="assets/images/icon-carbon-neutral.svg" alt="" />
                        <p>This is a <span className="carbon-neutral-span-element">carbon neutral</span> delivery</p>
                    </div>
                    <button className="confirm-order-button" onClick={showConfirmOrder}>Confirm order</button>
                    {isConfirming && <ConfirmOrder cart={cart} isConfirming={isConfirming} setIsConfirming={setIsConfirming} />}
                </div>
            </div> ) : (
                <div className="empty-cart cart-container">
                    <img src="assets/images/illustration-empty-cart.svg" alt="empty cart" />
                    <p>Your added items will appear here</p>
                </div>
            )
        }
            
        </div>
    )
}
