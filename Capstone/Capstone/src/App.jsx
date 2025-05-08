import './index.css'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import React from 'react'
import SingleProduct from './components/SingleProduct'
//import AllPlayers from "./features/AllPlayers";
//import MainRoute from './features/MainRoute'
//import NewPlayerForm from './features/NewPlayerForm'

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <section>
    <Routes>
      <Route path="/" element={<Products />} />
      <Routee path="/api/products/:product_id" element={<SingleProduct />} />
    </Routes>
    </section>
  );
}

// Export the App component as the default export
export default App;