import { useState, useEffect } from 'react'
import '../styles.css'
export default function Products() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    // featching the data using fetch method
    // using async and await as fetching data take time
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
  }
  // used useEffect with single dependecy to execute the funciton on mount time only
  
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='products'>
      <div className='header'>
        <h1 className='shop'>Shop</h1>
        <h1 className='cart'>Cart</h1>
      </div>
      <div className='grid'>
        {
          products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.thumbnail} alt={product.title} className='product-image' />
              <div className='product-info'>
                <h1 className='product-title'>{product.title}</h1>
                <p className='product-description'>{product.description.slice(0, 40)}...</p>
                <p className='product-price'>${product.price}</p>
              </div>
              <div className='add-to-cart'>
                <button className='add-to-cart-button'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
