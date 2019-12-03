import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Categories from "./components/Categories/Categories"
import ChatButton from "./components/Chat/ChatButton"
import ProductList from "./components/ProductList/ProductList"
import Items from "./components/Items/Items"

function App() {

    return (
        <>
            <Header/>
            {/*<Categories/>*/}
            <ProductList>
              <Items/>
            </ProductList>
            <ChatButton/>
        </>

    )
}

export default App;
