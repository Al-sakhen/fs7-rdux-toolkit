import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
