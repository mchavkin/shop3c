import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import ChatButton from "./components/Chat/ChatButton"
import ProductList from "./components/ProductList/ProductList"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ProductDetails from "./components/ProductDetails/ProductDetails"

function App() {

    return (
        <>
            <Header/>
            <ChatButton/>
            <Router>
                <Route path="/" exact component={ProductList} />
                <Route path="details/:id" component = {ProductDetails}/>

            </Router>

        </>

    )
}

export default App;
