// HomePage.js
import React, { useContext, useState } from 'react'
import ProductCard from './ProductCard'

import products from '../data'


const HomePage = () => {

  
  return (
    <div>
        HomePage

        <br />
        <main className="products__wrapper">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>    
            ))}            
        </main>
    </div>
  )
}

export default HomePage


