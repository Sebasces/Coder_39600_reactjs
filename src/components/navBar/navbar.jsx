import React from 'react'
import styles from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import ButtonGroup from '/Users/sebastiancescosta/Desktop/coder_react/src/components/ButtonGroup/ButtonGroup.jsx';



const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <img className={styles.logo} src= {logo} alt="logo" />
      </Link>
      <ul className={styles.lista}>
        <Link to="/" style={{color:'white', textDecoration: 'none' }}> 
        <li className={styles.home}>HOME</li>
        </Link>
        <ButtonGroup />
      </ul>
      <Link to="/cart" style={{color:'white', textDecoration: 'none'}}>
      <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar
