import React from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ({products}) => {
 const id = useParams ();
 const product = products.find ((product) => product.id == id);
 console.log(product)
 return (
  <h3>{product.title}</h3>
  
  )
}

export default ItemDetailContainer