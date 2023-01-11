import CartModalContentProduct from './CartModal/CartModalContentProduct'
import { useSelector } from 'react-redux'
import CartModalContentTotals from './CartModal/CartModalContentTotals'

const CartInner = () => {
    const productsInCart = useSelector(state => state.products.inCart)

    if (productsInCart.length) {
        return (
            <>
                <p className="text-center font-bold uppercase text-3xl mb-6 lg:mb-10">Mon Panier</p>
                <div className="o-grid">
                    <div className="o-col-12 lg:o-col-8 lg-down:mb-4">
                        <ul className="max-h-600px overflow-auto Scrollbar Scrollbar--light">
                            { productsInCart.map((product, index) =>
                                <CartModalContentProduct product={ product } key={ index }/>) }
                        </ul>
                    </div>

                    <div className="o-col-12 lg:o-col-4">
                        <div className="p-4 border border-gray-100 bg-white rounded">
                            <p className="text-center uppercase text-xl mb-8 font-bold">Résumé</p>

                            <CartModalContentTotals/>

                            <div className="flex-flow-center">
                                <button className="Button Button--primary">Paiement indisponible</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <p className="bg-primary-lighter text-primary-base p-4 rounded">Panier vide</p>
    )
}

export default CartInner
