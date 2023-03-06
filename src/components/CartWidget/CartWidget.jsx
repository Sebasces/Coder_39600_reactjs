
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './cartwidget.module.css'

const CartWidget = () => {
  return (
    <div>
    <ShoppingCartIcon color='inherit' fontSize='medium' className={styles.shoppingcart}/>
    <div className={styles.marcador}>0</div>
    </div>
  )
}

export default CartWidget