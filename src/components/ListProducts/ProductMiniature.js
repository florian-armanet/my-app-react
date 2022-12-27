import formatNumberToString from '../../utils/formatNumberToString'
import { NavLink } from 'react-router-dom'
import { generateStarRate } from '../../utils/generateStarRate'
import { roundHalf } from '../../utils/mathRound'
import { PATH_PRODUCTS } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInCart } from '../../store/productsStore'
import { useState, useEffect } from 'react'

const ProductMiniature = ({ product }) => {
    const dispatch                                = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const addToCart = () => {
        const payload = {
            ...product,
            quantity: 1
        }
        dispatch(addProductInCart({ ...payload }))
    }

    const renderIconAddToCartEnabled = <i onClick={ addToCart }
                                   className="Icon-basket cursor-pointer text-xl text-white bg-primary-base w-10 h-10 flex-flow-center rounded"></i>
    const renderIconAddToCartDisabled = <i className="Icon-basket text-xl text-white bg-green-500 w-10 h-10 flex-flow-center rounded"></i>

    const [contentAddToCart, setContentAddToCart] = useState(renderIconAddToCartEnabled)

    useEffect(() => {
        if (productsInCart.some(productIdQty => productIdQty.id === product.id)) {
            // setContentAddToCart(<input type="number" className="outline-0 ring-2 ring-inset ring-primary-base rounded w-12"/>)
            setContentAddToCart(renderIconAddToCartDisabled)
            return
        }

        setContentAddToCart(renderIconAddToCartEnabled)
    }, [productsInCart, dispatch])

    return (
        <li className="relative flex flex-col w-64 mx-2 mb-12 bg-white rounded-sm shadow hover:shadow-lg transition">
            <div className="group flex flex-col h-full">
                <NavLink to={ `${ PATH_PRODUCTS + '/' + product.id }` } className="h-56 p-2 overflow-hidden">
                    <img src={ product.image }
                         alt={ product.title }
                         className="h-full w-full object-contain mb-2 group-hover:scale-105 group-hover:rotate-2 transition"/>
                </NavLink>
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <p className="absolute top-0 left-0 bg-tertiary-base text-secondary-dark font-bold px-2 py-1">
                        { product.category.categoryLabel }
                    </p>
                    <NavLink to={ `${ PATH_PRODUCTS + '/' + product.id }` }
                             className="text-primary-base font-bold mb-1 line-clamp-2">
                        { product.title }
                    </NavLink>

                    <p className="flex-flow-centerY mb-4">
                        { generateStarRate(roundHalf(product.rating.rate)) }
                        <span className="ml-1 leading-none">({ product.rating.count } avis)</span>
                    </p>

                    <div className="flex-flow-between items-center">
                        <div>
                            <p className="font-bold text-secondary-base">{ formatNumberToString(product.price) } €</p>
                        </div>
                        { contentAddToCart }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductMiniature
