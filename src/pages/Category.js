import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import fetchProductsOfCategory from '../api/productsOfCategory'
import ProductMiniature from '../components/ListProducts/ProductMiniature'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Category = () => {
    const dispatch                                                  = useDispatch()
    const params                                                    = useParams()
    const paramCategoryLabelOrigin                                  = params.categoryLabelOrigin
    const productsOfCategoryStatusRequest                           = useSelector(state => state.productsOfCategory.status)
    const productsOfCategoryFetched                                 = useSelector(state => state.productsOfCategory.categoriesFetched)
    const [currentProductsOfCategory, setCurrentProductsOfCategory] = useState([])
    const [contentFetchingProcess, setContentFetchingProcess]       = useState(<p>En attente d\'une requête...</p>)

    /**
     *
     */
    useEffect(() => {
        if (productsOfCategoryStatusRequest === STATUS_LOADING) {
            setContentFetchingProcess(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (productsOfCategoryStatusRequest === STATUS_SUCCEEDED) {
            setContentFetchingProcess(<></>)
            return
        }

        if (productsOfCategoryStatusRequest === STATUS_FAILED) {
            setContentFetchingProcess(
                <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
            )
            return
        }

        setContentFetchingProcess(<></>)

    }, [productsOfCategoryStatusRequest, dispatch])

    /**
     *
     */
    useEffect(() => {
        if (!productsOfCategoryFetched.some(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin)) {
            dispatch(fetchProductsOfCategory(paramCategoryLabelOrigin))
            return
        }

        setCurrentProductsOfCategory([...productsOfCategoryFetched].filter(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin))
    }, [productsOfCategoryFetched, dispatch])

    if (currentProductsOfCategory.length) {
        return (
            <div>
                <NavLink to="/categories" className="Button Button--primary mb-8">
                    <i className="Icon-arrow-left mr-2"></i>
                    <span>Retour aux catégories</span>
                </NavLink>
                <TransitionGroup component="ul" className="flex flex-wrap -mx-2">
                    { currentProductsOfCategory.map(product => (
                        <CSSTransition
                            in={ true }
                            key={ product.id }
                            timeout={ 500 }
                            classNames="list"
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

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default Category
