import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/Navbar'
function App() {
  const [products, setProducts] = useState ([])

  useEffect (() => {  
    fetch('https://fakestoreapi.com/products/')
  .then(res=>res.json())
  .then(data=>setProducts(data))
  .catch((error) => {    
    console.error(error);    
  })
  }, [] )

  return (

<div>
 <NavBar />
  <Routes>
    <Route path="/Products" element={<ItemListContainer products={products}/>} />
    <Route path="/Products/:id" element={<ItemDetailContainer products={products}/>}/>
  </Routes>
</div>


  )
}

export default App

