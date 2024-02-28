import { addCategoriesSelected, removeCategoriesSelected } from '../../store/categoriesStore'
import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../../store/searcherStore'
import { setProductsFiltered } from '../../store/productsStore'
import { SORT_ASC, SORT_DESC } from '../../utils/constants'


const FiltersCategoriesItem = ({ category }) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const getCategoriesSelected = useSelector(state => state.categories.categoriesSelected)
    const currentSorting = useSelector(state => state.sorting.currentSorting)


    /**
     * 
     * @param {*} param0 
     * @returns 
     */
    const processFilterAndSortProducts = ({ _products = [], getCategoriesSelectedUpdated = [] }) => {
        const productsFiltered = [..._products].filter(product => {
            return getCategoriesSelectedUpdated.includes(product.category.categoryCode) || !getCategoriesSelectedUpdated.length
        })

        if (currentSorting?.typeSorting === SORT_DESC) {
            productsFiltered.sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
        }

        if (currentSorting?.typeSorting === SORT_ASC) {
            productsFiltered.sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
        }

        return productsFiltered
    }

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        dispatch(setSearcher(''))


        if (event.target.checked && !getCategoriesSelected.includes(category.categoryCode)) {
            const getCategoriesSelectedUpdated = [...getCategoriesSelected, category.categoryCode]

            const productsFiltered = processFilterAndSortProducts({ _products: [...products], getCategoriesSelectedUpdated })

            dispatch(addCategoriesSelected(category.categoryCode))
            dispatch(setProductsFiltered(productsFiltered))

            return
        }

        if (!event.target.checked && getCategoriesSelected.includes(category.categoryCode)) {
            const getCategoriesSelectedUpdated = [...getCategoriesSelected]
            getCategoriesSelectedUpdated.splice(getCategoriesSelected.indexOf(category.categoryCode), 1)

            const productsFiltered = processFilterAndSortProducts({ _products: [...products], getCategoriesSelectedUpdated })

            dispatch(removeCategoriesSelected(category.categoryCode))
            dispatch(setProductsFiltered(productsFiltered))
        }
    }

    return (
        <li className="flex flex-wrap items-center mb-1">
            <input type="checkbox"
                checked={getCategoriesSelected.includes(category.categoryCode)}
                onChange={handleChange}
                id={category.categoryCode}
                className="cursor-pointer appearance-none mr-2 w-5 h-5 border border-primary-base rounded checked:bg-primary-base" />
            <label htmlFor={category.categoryCode}
                className="cursor-pointer">{category.categoryLabel}</label>
        </li>
    )
}

export default FiltersCategoriesItem
