import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './itemdetailcontainer.module.css'
import Button from '../Button/Button'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState ({})
  const {id} = useParams ();
 
 useEffect (() =>
 {  
  fetch(`https://fakestoreapi.com/products/${id}`)
.then(res=>res.json())
.then(data=>setProduct(data))
.catch((error) => {    
  console.error(error);    
})
}, [] )

 
 
 return (
  <div className={styles.itemProduct}>
  <h2>{product.title}</h2>
  <img src={product.image} alt="" width="300" height="300"/>
  <h4>Category:{product.category}</h4>
  <h4>Description: {product.description}</h4>
  <h4>Price: ${product.price}</h4>
  <Link to="/cart">
  <Button text="add to cart"/>
  </Link>
  </div>
  

  
  )
}

export default ItemDetailContainer 