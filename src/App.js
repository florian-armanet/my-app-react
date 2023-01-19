import './App.scss'
import Nav from './components/Nav/Nav'
import LoadingData from './components/Common/LoadingData/LoadingData'
import Modals from './components/Modals/Modals'
import UseEffects from './components/Common/UseEffects/UseEffects'

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
