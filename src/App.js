import './App.scss'
import Layout from './js/components/Layout'
import Loading from './js/components/Loader/Loading'
import Logo from './js/components/Logo'
import LoadingData from './js/components/Common/LoadingData/LoadingData'
import Modals from './js/components/Modals/Modals'
import UseEffects from './js/components/Common/UseEffects/UseEffects'
import LoadingCategories from './js/components/Common/LoadingData/LoadingCategories'
import { STATUS_SUCCEEDED } from './js/utils/constants'
import { useSelector } from 'react-redux'

function App() {
    const productsStatusRequest = useSelector(state => state.products.status)

    return (
        <div className="App">
            <LoadingData />
            <LoadingCategories />
            {
                (productsStatusRequest === STATUS_SUCCEEDED) ?
                    [
                        <UseEffects key={1} />,
                        <Modals key={2} />,
                        <Layout key={3} />
                    ]
                    :
                    <div className="flex-flow-center flex-col w-screen h-screen">
                        <div className="flex flex-col items-center text-primary-base">
                            <div className={`p-2 border-2 border-primary-base rounded font-bold`}>
                                My app React
                            </div>
                            <span className={`text-xs mt-1 leading-none`}>By Florian Armanet</span>
                        </div>
                        <Loading/>
                    </div>
            }
        </div>
    )
}

export default App
