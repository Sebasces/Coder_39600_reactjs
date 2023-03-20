
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './carta.module.css'

const Carta = ({product}) => {
  return (
        <Link to={`/Products/${product.id}`} className={styles.cproducto} >
        <div >
        <h5>{product.title}</h5>
        <img src={product.image} width="100" height="100"/>
        <p>category:  {product.category}</p>
        <p>price: $  {product.price}</p>
        <p>{product.id}</p>
        </div>
        </Link>
        

) }


export default Carta

