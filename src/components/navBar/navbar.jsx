import React from 'react'
import styles from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logo.png'

const redirect = () => {alert('Proximamente')}
const navBar = () => {
  return (
    <nav className={styles.navbar}>
      
      <img className={styles.logo} src= {logo} alt="logo" />
      <ul className={styles.lista}>
        <li onClick={redirect}>Home</li>
        <li onClick={redirect}>Products</li>
        <li onClick={redirect}>Contact</li>
        <li onClick={redirect}>About</li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default navBar
