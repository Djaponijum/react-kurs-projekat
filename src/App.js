import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./Components/ProductList";
import AddProduct from "./Components/UI/AddProduct";
import ProductDetails from './Components/UI/ProductDetails'; 


function App() {
  return (
    <div >
    <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
