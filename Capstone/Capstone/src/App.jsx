import './index.css'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import React from 'react'
import SingleProduct from './components/SingleProduct'

function App() {

  return (
    <section>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:product_id" element={<SingleProduct />} />
    </Routes>
    </section>
  );
}


export default App;