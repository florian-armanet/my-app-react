import { useDispatch, useSelector } from 'react-redux'
import { setFiltersOpened } from '../../store/filtersStore'
import FiltersContent from './FiltersContent'
import { CSSTransition } from 'react-transition-group'
import { useEffect } from 'react'

const FiltersModal = () => {
    const dispatch      = useDispatch()
    const filtersOpened = useSelector(state => state.filters.filtersOpened)

    useEffect(() => {
        if (filtersOpened) {
            document.body.classList.add('remove-scrollbar')
            return
        }

        document.body.classList.remove('remove-scrollbar')
    }, [filtersOpened, dispatch])

    /**
     *
     */
    const closeFilters = () => {
        dispatch(setFiltersOpened(false))
    }

    return (
        <>
            <CSSTransition in={ filtersOpened } classNames="Animation-scale-opacity" timeout={ 300 } unmountOnExit appear>
                <div
                    className="z-max fixed inset-0 p-4 bg-white shadow text-primary-base overflow-auto">
                    <div className="relative h-full text-primary-base">
                        <i onClick={ closeFilters }
                           className="Icon-close-light absolute top-4 right-4 text-xl absolute-y-center cursor-pointer"></i>

                        <p className="text-center text-xl font-bold mb-2">Filtres</p>

                        <FiltersContent/>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default FiltersModal
