import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setSearchModalOpened } from '../../../store/searchStore'

const UseEffectSearch = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(setSearchModalOpened(false))
    }, [location])
}

export default UseEffectSearch
