import { useSelector } from 'react-redux'
import ProductMiniature from './ProductMiniature'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { STATUS_LOADING } from '../../utils/constants'
import LoaderBlock from '../Loader/LoaderBlock'

const ListProducts = () => {
    const productsFiltered      = useSelector(state => state.products.filtered)
    const productsStatusRequest = useSelector(state => state.products.status)

    if (productsFiltered.length) {
        return (
            <div className="lg:flex-1">
                <TransitionGroup component="ul" className="flex flex-wrap justify-center lg:justify-start -mx-2">
                    { productsFiltered
                        .map(product => (
                            <CSSTransition
                                in={ true }
                                key={ product.id }
                                timeout={ 500 }
                                classNames="Animation-list-item"
                                unmountOnExit
                                appear
                            >
                                <ProductMiniature product={ product } key={ product.id }/>
                            </CSSTransition>
                        )) }
                </TransitionGroup>
            </div>
        )
    }

    if (!productsStatusRequest || productsStatusRequest === STATUS_LOADING) {
        return (
            <div className="flex-1">
                <LoaderBlock nbBlocks={ 16 }/>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
        </div>
    )
}

export default ListProducts
