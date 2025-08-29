
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Agence'
import Agence from './pages/Agence'
import Projects from './pages/projects'

function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/agence' element={<Agence />} />
   <Route path='/projects' element={<Projects />} />


</Routes>
    </>
  )
}

export default App
