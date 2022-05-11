import formatNumberToString from '../../utils/formatNumberToString'
import { NavLink } from 'react-router-dom'
import { generateStarRate } from '../../utils/generateStarRate'
import { roundHalf } from '../../utils/mathRound'

const ProductMiniature = ({ product }) => {
    return (
        <li className="relative flex flex-col w-56 mx-2 mb-12 bg-white rounded-sm shadow hover:shadow-lg transition">
            <NavLink to={ `/products/${ product.id }` } className="group">
                <div className="h-56 p-2 overflow-hidden">
                    <img src={ product.image }
                         alt={ product.title }
                         className="h-full w-full object-contain mb-2 group-hover:scale-105 group-hover:rotate-2 transition"/>
                </div>
                <div className="p-4">
                    <p className="absolute top-0 left-0 bg-tertiary-base text-secondary-dark font-bold px-2 py-1">
                        { product.category.categoryLabel }
                    </p>
                    <p className="text-primary-base font-bold mb-4 line-clamp-2">{ product.title }</p>
                    <p className="flex-flow-centerY">
                        { generateStarRate(roundHalf(product.rating.rate)) }
                        <span className="ml-1">({ product.rating.count } avis)</span>
                    </p>
                    <p className="font-bold text-secondary-base">{ formatNumberToString(product.price) } €</p>
                </div>
            </NavLink>
        </li>
    )
}

export default ProductMiniature
