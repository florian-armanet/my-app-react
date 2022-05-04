import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Error from './pages/Error'
import ListProducts from './pages/ListProducts'
import reportWebVitals from './reportWebVitals'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="products" element={<ListProducts/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
