export const CartModalContentEmpty = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-center items-center">
                <i className="Icon-basket text-6xl text-primary-base mb-4"></i>
                <p className="text-xl text-primary-base">Votre panier est vide</p>
            </div>
        </div>
    )
}

export default CartModalContentEmpty
