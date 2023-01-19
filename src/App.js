import './App.scss'
import Nav from './components/Nav'
import LoadingData from './components/Common/LoadingData/LoadingData'
import Modals from './components/Modals/Modals'

function App () {
    return (
        <div className="App">
            <LoadingData/>
            <Modals/>
            <Nav/>
        </div>
    )
}

export default App
