import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './js/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATH_CART, PATH_CATEGORIES, PATH_PRODUCTS } from './js/utils/constants'
import App from './App'
import Home from './js/pages/Home'
import Error from './js/pages/Error'
import Products from './js/pages/Products'
import Product from './js/pages/Product'
import Category from './js/pages/Category'
import Categories from './js/pages/Categories'
import Cart from './js/pages/Cart'

document.body.classList.add('Scrollbar')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }>
                    <Route path="" element={ <Home/> }/>
                    <Route path={ PATH_PRODUCTS } element={ <Products/> }/>
                    <Route path={ `${ PATH_PRODUCTS }/:id` } element={ <Product/> }/>
                    <Route path={ PATH_CATEGORIES } element={ <Categories/> }/>
                    <Route path={ `${ PATH_CATEGORIES }/:categoryLabelOrigin` } element={ <Category/> }/>
                    <Route path={ PATH_CART } element={ <Cart/> }/>
                    <Route path="*" element={ <Error/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)
