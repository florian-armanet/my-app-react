import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../../store/searcherStore'
import debounce from '../../utils/debounce'
import { setProductsBySearcher, setProductsFiltered } from '../../store/productsStore'
import { useCallback, useEffect, useRef } from 'react'
import { setCategoriesSelected } from '../../store/filtersCategoriesStore'
import matchStrings from '../../utils/matchStrings'
import { SORT_ASC, SORT_DESC } from '../../utils/constants'

const Searcher = () => {
    const dispatch              = useDispatch()
    const searcherValue         = useSelector(state => state.searcher.searchValue)
    const getCategoriesSelected = useSelector(state => state.filtersCategories.categoriesSelected)
    const inputRef              = useRef()
    const currentSorting        = useSelector(state => state.sorting.currentSorting)
    const products              = useSelector(state => state.products.all)

    const changeHandler = (event) => {
        dispatch(setCategoriesSelected([]))
        dispatch(setSearcher(event.target.value))
    }

    /**
     *
     * @type {(function(...[*]): void)|*}
     */
    const changeHandlerDebounced = useCallback(debounce(changeHandler, 1000), [searcherValue])

    /**
     *
     */
    const onResetSearch = () => {
        dispatch(setSearcher(''))
        dispatch(setProductsBySearcher(''))
    }

    useEffect(() => {
        inputRef.current.value = searcherValue

        if (getCategoriesSelected.length) return

        const pdtsFiltered = [...products].filter(product => {
            return matchStrings(product.title, searcherValue) || searcherValue === ''
        })

        if (currentSorting?.typeSorting === SORT_DESC) {
            pdtsFiltered.sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
        }

        if (currentSorting?.typeSorting === SORT_ASC) {
            pdtsFiltered.sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
        }

        dispatch(setProductsFiltered(pdtsFiltered))
    }, [searcherValue])

    return (
        <div
            className="flex-flow-centerY justify-between bg-white rounded bg-primary-light/20 py-2 px-4 lg:px-8 hover:bg-primary-lighter transition-fast max-w-xs w-full">
            <input type="text"
                   placeholder="Filtrer par nom..."
                   ref={ inputRef }
                   className="text-primary-hover font-bold placeholder:text-primary-light/75 bg-transparent outline-none flex-1 max-w-[200px]"
                   onChange={ changeHandlerDebounced }/>
            <div className="flex-flow-centerY">
                { searcherValue && !getCategoriesSelected.length && <i onClick={ onResetSearch }
                                                                       className="Icon-close-light mr-2 text-primary-base cursor-pointer"></i> }
                <i className="Icon-filter text-lg text-primary-base"></i>
            </div>
        </div>
    )
}

export default Searcher
