import formatNumberToString from '../../utils/formatNumberToString'
import { NavLink } from 'react-router-dom'
import { generateStarRate } from '../../utils/generateStarRate'
import { roundHalf } from '../../utils/mathRound'
import { PATH_CART, PATH_PRODUCTS, PRODUCTS_IN_CART } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInCart } from '../../store/productsStore'
import { setCartModalOpened } from '../../store/cartStore'
import { useState, useEffect } from 'react'
import Quantity from '../Quantity'

const ProductMiniature = ({ product, cardType = 'Card-product' }) => {
    const dispatch       = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)
    const isCart         = location.pathname === PATH_CART

    const [productInCart, setProductInCart] = useState(null)

    /**
     *
     */
    const addToCart = () => {
        const payload = {
            ...product,
            quantity: 1
        }

        if (!isCart) {
            dispatch(setCartModalOpened(true))
        }

        dispatch(addProductInCart({ ...payload }))
    }

    useEffect(() => {
        setProductInCart(productsInCart.find(productInCart => productInCart.id === product.id))

        if (productInCart) {
            localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCart))
            return
        }

        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCart))
    }, [productsInCart, dispatch])

    return (
        <li className={ cardType }>
            <div className="group flex flex-col h-full">
                <NavLink to={ `${ PATH_PRODUCTS + '/' + product.id }` } className="h-32 sm:h-56 p-2 overflow-hidden">
                    <img src={ product.image }
                         alt={ product.title }
                         className="h-full w-full object-contain mb-2 group-hover:scale-105 group-hover:rotate-2 transition"/>
                </NavLink>

                <div className="flex-1 p-2 sm:p-4 flex flex-col justify-between">
                    <NavLink to={ `${ PATH_PRODUCTS + '/' + product.id }` }
                             className="font-bold line-clamp-1 line-break-anywhere">
                        { product.title }
                    </NavLink>

                    <p className="mb-1 text-sm">{ product.category.categoryLabel }</p>

                    <p className="flex-flow-centerY mb-4">
                        { generateStarRate(roundHalf(product.rating.rate)) }
                        <span className="ml-1 leading-none">({ product.rating.count } avis)</span>
                    </p>

                    <div className="flex-flow-between items-center">
                        <div>
                            <p className="font-bold text-primary-base">{ formatNumberToString(product.price) } €</p>
                        </div>

                        { productInCart && <Quantity product={ productInCart }/> }
                        { !productInCart && <i onClick={ addToCart }
                                               className="Icon-basket cursor-pointer text-xl text-white bg-primary-base w-10 h-10 flex-flow-center rounded transition-fast hover:bg-primary-hover"></i> }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductMiniature
