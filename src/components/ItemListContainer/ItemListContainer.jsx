
import Button from '../Button/Button'
import styles from './itemlistcontainer.module.css'
import Carta from '../Card/Carta';





const greeting = () => {alert("Bienvenido al Sitio de Tekarg. Aqui podrán acceder a productos tecnologicos al mejor precio. Actualmente el sitio se encuentra en Construccion")};



const ItemListContainer = ( {products}) => {
  
  
  
  return (
    <>
    <div className={styles.ilc}>
      <div className={styles.categorybutton}>
        <Button text="Electronics" handleClick={greeting}/>
        <Button text="Men´s Clothing" handleClick={greeting} />
        <Button text="Women´s Clothing" handleClick={greeting}/>
        <Button text="Jewerly" handleClick={greeting}/>
        </div>
    <div className={styles.cardContainer}>
      {products.map ((product) => (
      <Carta key={product.id} product={product} className={styles.producto}>
      </Carta>)) }
    </div>
    </div>
    
    </>
  )
}

export default ItemListContainer