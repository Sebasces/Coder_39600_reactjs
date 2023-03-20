import React from 'react'
import styles from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const redirect = () => {alert('Proximamente')}
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <img className={styles.logo} src= {logo} alt="logo" />
      </Link>
      <ul className={styles.lista}>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/Products">
        <li>Products</li>
        </Link>
        <li onClick={redirect}>Contact</li>
        <li onClick={redirect}>About</li>
      </ul>
      <Link to="/cart">
      <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
