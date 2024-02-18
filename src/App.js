import './App.scss'
import Layout from './js/components/Layout'
import LoadingData from './js/components/Common/LoadingData/LoadingData'
import Modals from './js/components/Modals/Modals'
import UseEffects from './js/components/Common/UseEffects/UseEffects'
import LoadingCategories from './js/components/Common/LoadingData/LoadingCategories'

function App () {
    return (
        <div className="App">
            <LoadingData/>
            <LoadingCategories/>
            <UseEffects/>
            <Modals/>
            <Layout/>
        </div>
    )
}

export default App
