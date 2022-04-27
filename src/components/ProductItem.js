const ProductItem = ({ product }) => {
    return (
        <div className="flex flex-col w-64 mx-2 mb-4 bg-white p-4 rounded-sm">
            <img src={product.image} alt={product.title} className="h-72 object-cover mx-auto mb-2"/>
            <p className="text-primary-base font-bold text-xl">{ product.title }</p>
        </div>
    )
}

export default ProductItem
