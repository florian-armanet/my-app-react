import { CSSTransition } from 'react-transition-group'
import Sorting from './Sorting'
import { setCurrentSorting, setSortingModalOpened } from '../../store/sortingStore'
import { setProductsFiltered } from '../../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { clickOut } from '../../utils/clickOut'
import { SORT_ASC, SORT_DESC } from '../../utils/constants'

const Sortings = () => {
    const dispatch           = useDispatch()
    const sortingModalOpened = useSelector(state => state.sorting.modalOpened)
    const sortings           = useSelector(state => state.sorting.sortings)
    const currentSorting     = useSelector(state => state.sorting.currentSorting)
    const containerRef       = useRef()
    const productsFiltered   = useSelector(state => state.products.filtered)

    /**
     *
     */
    const onResetSorting = () => {
        dispatch(setCurrentSorting({}))
        dispatch(setSortingModalOpened(false))
    }

    /**
     *
     */
    const handlerModal = () => {
        dispatch(setSortingModalOpened(!sortingModalOpened))
    }

    useEffect(() => {
        clickOut(containerRef.current, () => {
            if (!sortingModalOpened || !containerRef.current) return
            dispatch(setSortingModalOpened(!sortingModalOpened))
        })
    }, [containerRef, sortingModalOpened])

    useEffect(() => {
        if (currentSorting?.typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered([...productsFiltered].sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])))
            return
        }

        if (currentSorting?.typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered([...productsFiltered].sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])))
            return
        }

        dispatch(setProductsFiltered(
            [...productsFiltered]
                .sort((a, b) => a.id - b.id)
        ))
    }, [currentSorting])

    return (
        <div className="w-full max-w-xs lg:max-w-56 relative z-1 lg-down:mb-4 lg-down:flex-flow-center order-1"
             ref={ containerRef }>
            <button onClick={ handlerModal }
                    className="flex-flow-between items-center cursor-pointer px-2 lg:px-4 py-2 border border-black w-full rounded">
                <span>{ Object.keys(currentSorting).length ? currentSorting.name : 'Trier par' }</span>
                <i className={ `text-xl transition-fast Icon-angle-bottom ${ sortingModalOpened ? 'rotate-180' : '' }` }></i>
            </button>

            <CSSTransition in={ sortingModalOpened } classNames="Animation-translateY-opacity" timeout={ 300 }
                           unmountOnExit
                           appear>
                <div className="absolute left-0 right-0 bg-white border border-black"
                     style={ { top: 'calc(100% - 3px)' } }>
                    { sortings.map((sorting, index) => <Sorting sortingCode={ sorting.code } key={ index }/>) }

                    <button className="px-4 py-2 mt-2 underline hover:text-secondary-base transition"
                            onClick={ onResetSorting }>
                        Réinitialiser
                    </button>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Sortings
