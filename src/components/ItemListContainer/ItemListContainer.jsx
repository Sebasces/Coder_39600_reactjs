import React from 'react'
import Button from '../button/button'
import styles from './itemlistcontainer.module.css'



const greeting = () => {alert("Bienvenido al Sitio de Tekarg. Aqui podrán acceder a productos tecnologicos al mejor precio. Actualmente el sitio se encuentra en Construccion")};

const ItemListContainer = () => {
  return (
    <>
    <div className={styles.ilc}>

    <Button text="Sale" handleClick={greeting}/>
    <Button text="New arrivals" handleClick={greeting} />
    <Button text="Most wanted" handleClick={greeting}/>
    </div>
    <div>
      <tab />
    </div>
    </>
  )
}

export default ItemListContainer