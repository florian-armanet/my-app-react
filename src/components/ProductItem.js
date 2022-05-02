import formatNumberToString from '../utils/formatNumberToString'

const ProductItem = ({ product }) => {
    return (
        <li className="relative flex flex-col w-64 mx-2 mb-12 bg-white p-4 rounded-sm shadow hover:shadow-lg transition">
            <p className="absolute top-0 left-0 bg-tertiary-base text-secondary-dark font-bold px-2 py-1">
                { product.category.categoryLabel }
            </p>
            <img src={ product.image } alt={ product.title } className="h-72 object-cover mx-auto mb-2"/>
            <p className="text-primary-base font-bold text-xl">{ product.title }</p>
            <p className="font-bold text-secondary-base">{ formatNumberToString(product.price) } €</p>
        </li>
    )
}

export default ProductItem
