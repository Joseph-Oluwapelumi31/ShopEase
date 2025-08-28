import './AddToCart.css'
export default function AddToCart({ product, increaseCartCount, cart, decreaseCartCount }) {
    const add = () => {
        increaseCartCount(product);
    };
    const remove = () => {
        decreaseCartCount(product);
    };
    const cartItem = cart.find(item => item.id === product.id);
    return (
        <div>
            {!cartItem ? (
                <button onClick={add} className='add-to-cart-button'>
                    <img src="/assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
                    <span>Add to Cart</span>
                </button>
            ) : (
                <div className='quantity-selector'>
                    <button onClick={remove} className='quantity-button'>
                        <img src="/assets/images/icon-decrement-quantity.svg" alt="Decrease Quantity" className='decrease-quantity'></img>
                           
                    </button>
                    <span>{cart.find(item => item.id === product.id)?.quantity || 0}</span>
                    <button onClick={add} className='quantity-button'>
                        <img src="/assets/images/icon-increment-quantity.svg" alt="Increase Quantity" className='Increase-quantity' />
                    </button>
                </div>
            )}
        </div>
    );
};
