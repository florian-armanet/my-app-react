import formatNumberToString from '../../utils/formatNumberToString'
import { NavLink } from 'react-router-dom'
import { generateStarRate } from '../../utils/generateStarRate'
import { roundHalf } from '../../utils/mathRound'
import { PATH_PRODUCTS } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { addProductIds } from '../../store/cartStore'

const ProductMiniature = ({ product }) => {
    const dispatch = useDispatch()

    /**
     *
     */
    const addToCart = () => {
        const payload = {
            productId: product.id,
            quantity: 1
        }
        dispatch(addProductIds({...payload}))
    }

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
                             className="text-primary-base font-bold mb-4 line-clamp-2">
                        { product.title }
                    </NavLink>
                    <div className="flex-flow-between">
                        <div>
                            <p className="flex-flow-centerY">
                                { generateStarRate(roundHalf(product.rating.rate)) }
                                <span className="ml-1">({ product.rating.count } avis)</span>
                            </p>
                            <p className="font-bold text-secondary-base">{ formatNumberToString(product.price) } €</p>
                        </div>
                        <i onClick={ addToCart }
                           className="Icon-basket cursor-pointer text-xl text-white bg-primary-base w-10 h-10 flex-flow-center rounded"></i>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductMiniature
