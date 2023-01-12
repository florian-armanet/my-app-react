import { useDispatch, useSelector } from 'react-redux'
import { setSearcher, setInputValue } from '../store/searcherStore'
import debounce from '../utils/debounce'
import { setProductsBySearcher } from '../store/productsStore'
import { useEffect, useState } from 'react'
import { setResetCheckedValues } from '../store/filtersCategoriesStore'

const Searcher = () => {
    const dispatch                              = useDispatch()
    const getSearchValue                        = useSelector(state => state.searcher.searchValue)
    const inputValue                            = useSelector(state => state.searcher.inputValue)
    const [renderCloseIcon, setRenderCloseIcon] = useState('')

    /**
     *
     * @param event
     */
    const handleBeforeChange = (event) => {
        dispatch(setInputValue(event.target.value))
        dispatch(setResetCheckedValues(true))
    }

    /**
     *
     * @type {(function(...[*]): void)|*}
     */
    const handleChange = debounce((event) => {
        dispatch(setSearcher(event.target.value))
    }, 1000)

    /**
     *
     */
    const onResetSearch = () => {
        dispatch(setSearcher(''))
        dispatch(setInputValue(''))
    }

    useEffect(() => {
        if (!getSearchValue) {
            setRenderCloseIcon('')
            dispatch(setProductsBySearcher(getSearchValue))

            return
        }

        setRenderCloseIcon(<i onClick={ onResetSearch }
                              className="Icon-close-light mr-2 text-primary-base cursor-pointer"></i>)
        dispatch(setProductsBySearcher(getSearchValue))

    }, [getSearchValue])

    return (
        <div
            className="flex-flow-centerY justify-between bg-white rounded bg-primary-light/20 py-2 px-8 hover:bg-primary-lighter transition-fast max-w-xs w-full">
            <input type="text"
                   placeholder="Rechercher un produit..."
                   value={ inputValue }
                   className="text-primary-hover font-bold placeholder:text-primary-base bg-transparent outline-none flex-1 max-w-[200px]"
                   onChange={ e => {
                       handleBeforeChange(e)
                       handleChange(e)
                   } }/>
            <div className="flex-flow-centerY">
                { renderCloseIcon }
                <i className="Icon-search text-lg text-primary-base"></i>
            </div>
        </div>
    )
}

export default Searcher
