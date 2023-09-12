import React, { useContext } from 'react'

// context
import CartContext from '../context/cart/CartContext'





// 👉HomePage.js
const ProductCard = ({product}) => {
 
  
  const {test,addToCart, cartItems} = useContext(CartContext)

  return (
    <div>
      ProductCard  {test}  
        <main className="productCart__wrapper">
            <img src={product.image}  style={{ width: '10%' }}/>
            <h4>{product.name}</h4>
            <div>
              <h5>$ {product.price}</h5>
            </div>
       
            <button  onClick={() => addToCart(product) }>
            add to cart
            </button>

          
        </main>
    </div>
  )
}

export default ProductCard