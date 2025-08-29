import './Product.css'
import AddToCart from './AddToCart';
export default function Product({ product , increaseCartCount, cart, decreaseCartCount}) {
    // const add = () => {
    //     increaseCartCount(product);
    // };
    // const remove = () => {
    //     decreaseCartCount(product);
    // };
    // const cartItem = cart.find(item => item.id === product.id);
    return (
        <div className="product">  
            <div className='product-image-container'>
                <picture>
                    <source media="(min-width: 600px)" srcSet={product.image.tablet} />
                    <source media="(min-width: 900px)" srcSet={product.image.desktop} />
                    <img src={product.image.mobile} alt="Product Image" className= "product-image"/>
                </picture>
                <div className='add-to-cart'>
                    <AddToCart 
                        product={product} 
                        increaseCartCount={increaseCartCount} 
                        cart={cart}
                        decreaseCartCount={decreaseCartCount}
                    />
                </div>
            </div>
            <div>
                <p className='product-description'>{product.category}</p>
                <h2 className='product-name'>{product.name}</h2>
                <span className='product-price'>${product.price}</span>
            </div>

        </div>
    )
}
