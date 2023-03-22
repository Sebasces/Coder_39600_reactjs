

import styles from './itemlistcontainer.module.css'
import Carta from '../Card/Carta';
import Categories from '../Categorias/Categorias';
import { useParams } from 'react-router-dom';








const ItemListContainer = ( {products}) => {

  const categorias = [
  "electronics",
  "jewerly", 
  "men's clothing",
  "women's clothing",
]
console.log(categorias)

const { categoria } = useParams;
if (categoria != undefined) {products = products.filter((product) => product.category == categoria)}
  
return (
    <div>   
      <div>
    <Categories />
      </div>
    <div className={styles.cardContainer}>
      {products.map ((product) => (
      <Carta key={product.id} product={product} className={styles.producto}>
      </Carta>)) }
    </div>
    </div>
  )
}

export default ItemListContainer