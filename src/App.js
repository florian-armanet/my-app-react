import './App.scss'
import Layout from './js/components/Layout'
import Loading from './js/components/Loader/Loading'
import LoadingData from './js/components/Common/LoadingData/LoadingData'
import Modals from './js/components/Modals/Modals'
import UseEffects from './js/components/Common/UseEffects/UseEffects'
import LoadingCategories from './js/components/Common/LoadingData/LoadingCategories'
import { STATUS_SUCCEEDED } from './js/utils/constants'
import { useSelector } from 'react-redux'

function App() {
    const productsStatusRequest = useSelector(state => state.products.status)

    console.log('App')
    console.log(productsStatusRequest)

    return (
        <div className="App">
            <LoadingData />
            <LoadingCategories />
            
            {
                (productsStatusRequest === STATUS_SUCCEEDED) ?
                    [
                        <Layout key={1} />,
                        <UseEffects key={2} />,
                        <Modals key={3} />,
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
