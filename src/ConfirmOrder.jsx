import './ConfirmOrder.css';

export default function ConfirmOrder({ cart  ,setIsConfirming}) {

    return (
        <div className="popup">
            <div className="overlay">
                <img src="assets/images/icon-order-confirmed.svg" alt="" />
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food</p>
                <div className="cart-items" style={{ backgroundColor: 'var(--color-rose-100)' }}>

                    {cart.map(item => (
                        <div key={item.id} className="cart-item">

                            <div className="cart-item-details">
                                <div className='product-details'>
                                    <img src={item.image.thumbnail} alt={item.name} className="cart-item-image" />
                                    <div className='product-info'>
                                        <h3 className='product-name'>{item.name}</h3>
                                        <div className="quantity-product-container">
                                            <p className='product-quantity'>{item.quantity}</p>
                                            <h2 className='product-price'>@${item.price}</h2>
                                        </div>
                                    </div>
                                    <p className='product-total'>${item.totalPrice}</p>

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

                    </div>
                </div>

                <button className="confirm-order-button" onClick={() => setIsConfirming(false)}>Set New Order</button>
            </div>
        </div>
        
    );
}
