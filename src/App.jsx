import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route,Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
         <Route path="/SoleSphere" element={<Home />} />
        <Route path="/SoleSphere/mens-footwear" element={<ProductList category="Men" />} />
        <Route path="/SoleSphere/womens-footwear" element={<ProductList category="Women" />} />
        <Route path="/SoleSphere/kids-footwear" element={<ProductList category="Kids" />} />
        <Route path="/SoleSphere/sports-footwear" element={<ProductList category="Sports" />} />
        <Route path="/SoleSphere/specialty-footwear" element={<ProductList category="Specialty" />} />
        <Route path="/SoleSphere/seasonal-footwear" element={<ProductList category="Seasonal" />} />
        <Route path="/SoleSphere/cart" element={<Cart />} />
        <Route path={`/:id`} element={<Product/>} />
      </Routes>
      
    </>
  )
}

export default App
