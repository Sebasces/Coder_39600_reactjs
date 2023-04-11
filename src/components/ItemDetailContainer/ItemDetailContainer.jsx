
import {  useParams } from 'react-router-dom'
import styles from './itemdetailcontainer.module.css'
import { dataContext } from '../Context/Context'
import { useContext } from 'react'



const ItemDetailContainer = () => {
const { id } = useParams ();
const { products, cart, setCart } = useContext (dataContext);


const comprar = (product) => {
  setCart[cart, product]
}
const product = products.find ((product => (product.id === parseInt( id )  ))) 
 

 return (
  
  <div className={styles.itemProduct} key={product.id}>
  <h2>{product.title}</h2>
  <img src={product.image} alt="" width="300" height="300"/>
  <h4>Category:{product.category}</h4>
  <h4>Description: {product.description}</h4>
  <h4>Price: ${product.price}</h4>
  <button onClick={comprar (product)}> add to cart </button>
  </div>
  
 
  
  )
}

export default ItemDetailContainer 