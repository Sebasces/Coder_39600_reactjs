import React from 'react';
import styles from './button.module.css';

const handleClick = () => {alert("Sitio en Construcción")};

const Button = ({ handleClick, text }) => {
    return ( 
    <button className={styles.button} onClick={handleClick}> {text} </button>
)}

export default Button
