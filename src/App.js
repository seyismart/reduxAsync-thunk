import * as React from "react";
import "./App.css";
import Header from "./container/Header"
import { Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";
import PageNotFound from "./container/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
}

export default App;
