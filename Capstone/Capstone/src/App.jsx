import './index.css'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import React from 'react'
import SingleProduct from './components/SingleProduct'
import Login from './components/login'
import Navigation from './components/Navigation'
import { useSelector } from 'react-redux'
import { selectToken } from './redux/authSlice'

function App() {
  const token = useSelector(selectToken);

  return (
    <div className="app">
      <header>
        <h1>NFL App</h1>
        <Navigation />
      </header>

      <main>
        <section>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:product_id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;