import { useSelector } from 'react-redux'
import SortingItem from './SortingItem'
import { INPUT_SORTING } from '../../utils/constants'

const Sorting = ({ sortingCode }) => {
    const sortings = useSelector(state => state.sorting.sortings)
    const currentSorting = sortings.find(sorting => sorting.code === sortingCode)

    return (
        <>
            <ul className="flex flex-col">
                {Object.entries(INPUT_SORTING)
                    .map(([typeSorting, label], index) => {
                        return <SortingItem item={{ typeSorting, ...currentSorting, name: currentSorting.name + ' ' + label }} key={index} />
                    })
                }
            </ul>
        </>
    )
}

export default Sorting
