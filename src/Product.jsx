import './Product.css'
export default function Product({ product , addToCart}) {
    return (
        <div className="product">
                   
            <div className='product-image-container'>
                <picture>
                    <source media="(min-width: 600px)" srcSet={product.image.tablet} />
                    <source media="(min-width: 900px)" srcSet={product.image.desktop} />
                    <img src={product.image.mobile} alt="Product Image" className= "product-image"/>
                </picture>
                <button onClick={() => addToCart(product)} className='add-to-cart-button'>
                    <img src="/assets/images/icon-add-to-cart.svg" alt="Add to Cart" className='add-to-cart-icon'/>
                    <span>Add to Cart</span>
                </button>
            </div>
            <div>
                <p className='product-description'>{product.category}</p>
                <h2 className='product-name'>{product.name}</h2>
                <span className='product-price'>${product.price}</span>
            </div>
        </div>
    )
}
