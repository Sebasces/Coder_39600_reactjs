import { dataContext } from '../Context/Context'
import { useContext } from 'react'
import React from 'react'

const CartElemento = () => {
    const { cart } = useContext (dataContext)
    return (
    cart.map((product)=>{
    <div key={product.id}>
    <h5>{product.title}</h5>
    <img src={product.image} alt="" width="150" height="150"/>
    <h6>Category:{product.category}</h6>
    <h6>Price: ${product.price}</h6>
  </div>
    }))
}

export default CartElemento