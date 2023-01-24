import './App.scss'
import Nav from './js/components/Nav/Nav'
import LoadingData from './js/components/Common/LoadingData/LoadingData'
import Modals from './js/components/Modals/Modals'
import UseEffects from './js/components/Common/UseEffects/UseEffects'

function App () {
    return (
        <div className="App">
            <LoadingData/>
            <UseEffects/>
            <Modals/>
            <Nav/>
        </div>
    )
}

export default App
