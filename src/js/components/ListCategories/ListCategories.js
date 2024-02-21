import { useSelector } from 'react-redux'
import { STATUS_LOADING } from '../../utils/constants'
import CategoryMiniature from './CategoryMiniature'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import LoaderBlock from '../Loader/LoaderBlock'

const ListCategories = () => {
    const categories              = useSelector(state => state.categories.categories)
    const products                = useSelector(state => state.products.products)
    const categoriesStatusRequest = useSelector(state => state.categories.status)
    const productsStatusRequest   = useSelector(state => state.products.status)

    if (categories.length && products.length) {
        return (
            <section>
                <h2 className="mb-6 text-3xl text-primary-base font-bold">Nos catégories</h2>
                <TransitionGroup component="ul" className="o-grid">
                    { categories
                        .map((category) => (
                            <CSSTransition
                                in={ true }
                                key={ category.categoryCode }
                                timeout={ 500 }
                                classNames="Animation-list-item"
                                unmountOnExit
                                appear
                            >
                                <CategoryMiniature key={ category.categoryCode } category={ category }/>
                            </CSSTransition>
                        )) }
                </TransitionGroup>
            </section>
        )
    }

    if (!categoriesStatusRequest || categoriesStatusRequest === STATUS_LOADING || !productsStatusRequest || productsStatusRequest === STATUS_LOADING) {
        return (
            <section>
                <LoaderBlock nbBlocks={ 4 }/>
            </section>
        )
    }

    return (
        <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
    )
}

export default ListCategories
