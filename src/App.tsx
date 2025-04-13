import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Country } from './Pages/country'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country' element={<Country/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
