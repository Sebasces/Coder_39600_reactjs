
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './carta.module.css'
import Button from '../Button/Button'

const Carta = ({ product }) => {
  return (
        <Link to={`/${product.id}`} className={styles.cproducto}>
        <div >
        <h5>{product.title}</h5>
        <img src={product.image} width="100" height="100"/>
        <p>category:  {product.category}</p>
        <p>price: $  {product.price}</p>
        </div>
        </Link>
        

) }


export default Carta

