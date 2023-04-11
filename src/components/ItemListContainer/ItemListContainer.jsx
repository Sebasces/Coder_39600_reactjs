import { dataContext } from '../Context/Context';
import { useContext } from 'react';
import styles from './itemlistcontainer.module.css'
import Carta from '../Card/Carta';



const ItemListContainer = () => {

  const {products} = useContext (dataContext);
  const {categoryId} = useContext (dataContext);
  


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