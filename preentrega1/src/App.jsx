import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/"
import Home from './views/Home/Home'
import Productos from './views/Productos/Productos'
import Detalles from './views/Detalles/Detalles'
import Categoria from './views/Categoria/Categoria'

function App() {
  return(
    <Router>
      <main className="main">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Detalles/:id' element={<Detalles/>}/>
          <Route path='/Categoria/:categoriasId' element={<Categoria/>}/>
        </Routes>
      </main>
    </Router>
  ) 
}

export default App
