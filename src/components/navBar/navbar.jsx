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
        <Link to="/category/jewelery" style={{color:'white', textDecoration: 'none' }}>
        <li>
          Jewerly
        </li>
        </Link>
        <Link to="/category/electronics" style={{color:'white', textDecoration: 'none' }}>
        <li>Electronics</li>
        </Link>
        <Link to="/category/men's clothing" style={{color:'white', textDecoration: 'none' }}>
        <li >Men´s Clothing</li>
        </Link>
        <Link to="/category/women's clothing" style={{color:'white', textDecoration: 'none' }}>
        <li>Women´s Clothing</li>
        </Link>
      </ul>
      <Link to="/cart" style={{color:'white', textDecoration: 'none'}}>
      <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
