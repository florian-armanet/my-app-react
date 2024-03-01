import './App.scss'
import Layout from './js/components/Layout'
import Loading from './js/components/Loader/Loading'
import Modals from './js/components/Modals/Modals'
import { STATUS_SUCCEEDED } from './js/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from './js/api/products'
import fetchCategories from './js/api/categories'

function App() {
    const dispatch = useDispatch()
    const productsStatusRequest = useSelector(state => state.products.status)
    const categoriesStatusRequest = useSelector(state => state.categories.status)

    if (!productsStatusRequest) {
        dispatch(fetchProducts())
    }

    if (!categoriesStatusRequest) {
        dispatch(fetchCategories())
    }

    return (
        <div className="App">
            {
                (productsStatusRequest === STATUS_SUCCEEDED && categoriesStatusRequest === STATUS_SUCCEEDED) ?
                    [
                        <Layout key={1} />,
                        <Modals key={2} />,
                    ]
                    :
                    <div className="flex-flow-center flex-col w-screen h-screen">
                        <div className="flex flex-col items-center text-primary-base">
                            <div className={`p-2 border-2 border-primary-base rounded font-bold`}>
                                My app React
                            </div>
                            <span className={`text-xs mt-1 leading-none`}>By Florian Armanet</span>
                        </div>
                        <Loading />
                    </div>
            }
        </div>
    )
}

export default App
