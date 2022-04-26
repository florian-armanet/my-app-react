import logo from './logo.svg'
import './App.css'
import Products from '../src/components/Products'

function App () {
    return (
        <div className="App">
            <div className="max-w-container w-full mx-auto">
                <img src={ logo } className="App-logo" alt="logo"/>
                <Products/>
            </div>
        </div>
    )
}

export default App
