import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const dataContext = createContext ();

const DataProvider = ( { children }) => {
    
    const { categoryId } = useParams ()
    
    const [products, setProducts] = useState ([])
    const [cart, setCart] = useState ([])
    
    useEffect (() => {  
      fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(data=>{ 
  if(categoryId){
  const productFiltrados = data.filter(p => p.category === categoryId)
  setProducts(productFiltrados )
  } else{
  setProducts(data)
  }})
    .catch((error) => {    
      console.error(error);  
      console.log(setProducts) 
    })
    }, [categoryId] );
  

return (
    <dataContext.Provider value = {{products, categoryId, cart, setCart}}>{children}</dataContext.Provider> 




)




};

export default DataProvider




