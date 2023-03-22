

import styles from './itemlistcontainer.module.css'
import Carta from '../Card/Carta';
import { useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

  

  const { categoryId } = useParams ()

  const [products, setProducts] = useState ([])

  
  useEffect (() => {  
    fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(data=>{ 
if(categoryId){
const productFiltrados = data.filter(p => p.category === categoryId)
setProducts(productFiltrados )
} else{
setProducts(data)
}})
  .catch((error) => {    
    console.error(error);    
  })
  }, [categoryId] );


return (
    
    <div className={styles.ilc}>
    <div className={styles.cardContainer}>
      {products.map ((product) => (
      <Carta key={product.id} product={product} className={styles.producto}>
      </Carta>)) }
      </div>
    </div>
  
  
  )
}

export default ItemListContainer