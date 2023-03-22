
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/Navbar'

function App() {
  
  return (

<div>
 <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/:id" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<p>EN CONSTRUCCION</p>}/>
  </Routes>
</div>


  )
}

export default App

