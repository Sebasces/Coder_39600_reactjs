import React from 'react'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ({products}) => {
 const id = useParams ();
 const product = products.find ((product) => product.id == parseInt(id));
 console.log(product)
 console.log(products)
 return (
  <h3>{product.title}</h3>
  
  )
}

export default ItemDetailContainer