const ProductItem = ({ product }) => {
    return (
        <div className="flex flex-col w-1/3 px-4 pb-8">
            <img src={product.image} alt={product.title} className="w-64 h-72 object-cover mx-auto"/>
            <p className="text-primary-base">{ product.title }</p>
        </div>
    )
}

export default ProductItem
