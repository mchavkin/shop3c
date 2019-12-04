import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import SupportChat from "./components/Chat/SupportChat"
import ProductList from "./components/ProductList/ProductList"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Cart from "./components/Cart/Cart"

function App() {

    return (
        <>
            <Router>
                <Header/>
                <SupportChat/>
                <Route path="/" exact component={ProductList}/>
                <Route path="/category/:cat" render={({match}) => (
                    <ProductList cat={match.params.cat}/>)}/>
                <Route path="/details/:id" component={ProductDetails}/>
                <Route path="/cart" component={Cart}/>

            </Router>

        </>

    )
}

export default App;
