import React from 'react'
import styles from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logo.png'
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <img className={styles.logo} src= {logo} alt="logo" />
      </Link>
      <ul className={styles.lista}>
        <Link to="/" style={{color:'white', textDecoration: 'none' }}> 
        <li >Home</li>
        </Link>
        <Link to="/category/jewerly">
        <li>
          Jewerly
        </li>
        </Link>
        <Link to="/category/electronics">
        <li>Electronics</li>
        </Link>
        <li >About</li>
      </ul>
      <Link to="/cart">
      <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
