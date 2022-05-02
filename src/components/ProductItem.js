import formatNumberToString from '../utils/formatNumberToString'
import { MAX_RATE } from '../utils/constants'

const ProductItem = ({ product }) => {
    const roundHalfRate = Math.round(( product.rating.rate * 2 )) / 2

    const generateStarRate = (rate) => {
        const starsArr = new Array(MAX_RATE).fill(null)
        return starsArr.map((el, index) => {
            if (index + 1 <= rate) {
                return <i className="Icon-star" key={ index }></i>
            }

            if (index + 1 > rate && index + 1 < rate + 1) {
                return <i className="Icon-star-half" key={ index }></i>
            }

            return <i className="Icon-star-empty" key={ index }></i>
        })
    }

    return (
        <li className="relative flex flex-col w-64 mx-2 mb-12 bg-white rounded-sm shadow hover:shadow-lg transition">
            <div className="h-72 p-2">
                <img src={ product.image } alt={ product.title } className="h-full w-full object-contain mb-2"/>
            </div>
            <div className="p-4">
                <p className="absolute top-0 left-0 bg-tertiary-base text-secondary-dark font-bold px-2 py-1">
                    { product.category.categoryLabel }
                </p>
                <p className="text-primary-base font-bold mb-4">{ product.title }</p>
                <p className="flex-flow-centerY">
                    { generateStarRate(roundHalfRate) }
                    <span className="ml-1">({ product.rating.count } avis)</span>
                </p>
                <p className="font-bold text-secondary-base">{ formatNumberToString(product.price) } €</p>
            </div>
        </li>
    )
}

export default ProductItem
