import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import Products from './pages/Products'
import reportWebVitals from './reportWebVitals'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import Category from './components/Category'
import Categories from './pages/Categories'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }>
                    <Route path="" element={ <Home/> }/>
                    <Route path="products" element={ <Products/> }/>
                    <Route path="/products/:id" element={ <Product/> }/>
                    <Route path="/categories" element={ <Categories/> }/>
                    <Route path="/categories/:categoryLabelOrigin" element={ <Category/> }/>
                    <Route path="*" element={ <Error/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
