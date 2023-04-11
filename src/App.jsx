
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/Navbar'
import CartContent from './components/CartContent/CartContent'
import DataProvider from './components/Context/Context'

function App() {
  
  return (
<DataProvider>
<div>
 <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/:id" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<CartContent/>}/>
  </Routes>
</div>
</DataProvider>

  )
}

export default App

