import './App.scss'
import Layout from './js/components/Layout'
import LoadingData from './js/components/Common/LoadingData/LoadingData'
import Modals from './js/components/Modals/Modals'
import UseEffects from './js/components/Common/UseEffects/UseEffects'
import LoadingCategories from './js/components/Common/LoadingData/LoadingCategories'
import { STATUS_SUCCEEDED } from './js/utils/constants'
import { useSelector } from 'react-redux'

function App () {
    const productsStatusRequest = useSelector(state => state.products.status)

    console.log(productsStatusRequest)

    return (
        <div className="App">
            <LoadingData/>
            <LoadingCategories/>
            {
                (productsStatusRequest === STATUS_SUCCEEDED) && 
                [
                    <UseEffects key={1}/>,
                    <Modals key={2}/>,
                    <Layout key={3}/>
                ]
            }
        </div>
    )
}

export default App
