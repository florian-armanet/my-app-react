import { setFiltersOpened } from '../../store/filtersStore'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { isTablet } from '../../utils/viewport'
import FiltersContent from './FiltersContent'

const Filters = () => {
    const dispatch                                        = useDispatch()
    const [renderFiltersContent, setRenderFiltersContent] = useState(null)

    /**
     *
     */
    const onClick = () => {
        dispatch(setFiltersOpened(true))
    }

    useEffect(() => {
        if (!isTablet()) {
            setRenderFiltersContent(<FiltersContent/>)
        }
    }, [])

    return (
        <div className="flex flex-col lg:mr-8 max-w-xs w-full mb-4 lg:mb-8">
            <div onClick={ onClick }
                 className="flex-flow-between text-primary-base font-bold mb-4 p-2 border border-primary-base rounded lg:hidden cursor-pointer">
                <p>Filtres</p>
                <i className="Icon-angle-bottom text-xl"></i>
            </div>
            <p className="font-bold mb-4 lg-down:hidden text-primary-base">Filtres</p>

            { renderFiltersContent }
        </div>
    )
}

export default Filters
