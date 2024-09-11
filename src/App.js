import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';
import Product from "./components/3-product/Product";
import ProductDetails from './components/8-ProductDetails/ProductDetails';
import FavoritesPage from './components/FavoritesPage';
import Register from './components/6-Services/Register';
import Login from './components/6-Services/Login';
import { LanguageProvider } from './components/LanguageContext';


function App() {
  return (
    <LanguageProvider>
    <div className="App">



      <Header />
      <Routes>
        <Route path="/" element={<>
   
          <Product />
        </>} />
    

        <Route path="/register" element={<>
             <Register/>
              </>} />

              <Route path="/login" element={<>
           <Login/>
              </>} />
    

        <Route path="/:productId" element={<>
          <ProductDetails />
        </>} />

        <Route path="/favorites" element={<FavoritesPage/>} />


      </Routes>
   
     
    </div>
    </LanguageProvider>
  );
}

export default App;
