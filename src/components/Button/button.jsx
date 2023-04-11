import React from 'react';
import styles from './button.module.css';
import { useParams } from 'react-router-dom';


const Button = ({  text }) => {
    const product = useParams ();
    
    const comprar = () => {
        console.log(product)
        }
    return ( 
    <button className={styles.button} onClick={comprar}> {text} </button>
)}

export default Button
