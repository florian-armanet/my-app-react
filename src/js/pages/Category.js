import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { PATH_CATEGORIES, STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import fetchProductsOfCategory from '../api/productsOfCategory'
import ProductMiniature from '../components/ListProducts/ProductMiniature'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import LoaderBlock from '../components/Loader/LoaderBlock'

const Category = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const paramCategoryLabelOrigin = params.categoryLabelOrigin
    const categories = useSelector(state => state.categories.categories)
    const currentCategory = [...categories].find(cat => cat.categoryLabelOrigin === paramCategoryLabelOrigin)
    const productsOfCategoryStatusRequest = useSelector(state => state.productsOfCategory.status)
    const productsOfCategoryFetched = useSelector(state => state.productsOfCategory.productsOfCategoryFetched)

    const currentProductsOfCategory = [...productsOfCategoryFetched].filter(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin)

    /**
     *
     */
    useEffect(() => {
        if (!productsOfCategoryFetched.some(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin)) {
            dispatch(fetchProductsOfCategory(paramCategoryLabelOrigin))
        }
    }, [params])

    if (productsOfCategoryStatusRequest === STATUS_SUCCEEDED) {
        return (
            <div>
                <NavLink to={PATH_CATEGORIES} className="Button Button--primary mb-8">
                    <i className="Icon-arrow-left mr-2"></i>
                    <span>Retour aux catégories</span>
                </NavLink>
                <h1 className="text-center text-primary-light font-bold text-2xl lg:text-3xl mb-4 lg:mb-10">{currentCategory.categoryLabel}</h1>
                <TransitionGroup component="ul" className="flex flex-wrap justify-center lg:justify-start -mx-2">
                    {currentProductsOfCategory.map(product => (
                        <CSSTransition
                            in={true}
                            key={product.id}
                            timeout={500}
                            classNames="list"
                            unmountOnExit
                            appear
                        >
                            <li className="Card-product Card-product--sm">
                                <ProductMiniature product={product} key={product.id} />
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }

    if (productsOfCategoryStatusRequest === STATUS_LOADING || !productsOfCategoryStatusRequest) {
        return (
            <LoaderBlock nbBlocks={8} />
        )
    }

    if (productsOfCategoryStatusRequest === STATUS_FAILED) {
        return (
            <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
        )
    }
}

export default Category
