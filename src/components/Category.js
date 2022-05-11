import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import fetchProductsOfCategory from '../api/productsOfCategory'
import ProductMiniature from './ListProducts/ProductMiniature'

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
            <ul className="flex flex-wrap -mx-2">
                { currentProductsOfCategory.map(product =>
                    <ProductMiniature product={ product } key={ product.id }/>
                ) }
            </ul>
        )
    }

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default Category
