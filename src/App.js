import './App.scss'
import Nav from './components/Nav'
import { useEffect } from 'react'
import { PRODUCTS_IN_CART } from './utils/constants'
import { setProductInCart } from './store/productsStore'
import { useDispatch, useSelector } from 'react-redux'

function App () {
    const dispatch       = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    useEffect(() => {
        if (!productsInCart.length) {
            if (localStorage.getItem(PRODUCTS_IN_CART)) {
                const initData = JSON.parse(localStorage.getItem(PRODUCTS_IN_CART))
                dispatch(setProductInCart([...initData]))
            }
        }
    }, [dispatch])

    return (
        <div className="App">
            <Nav/>
        </div>
    )
}

export default App
