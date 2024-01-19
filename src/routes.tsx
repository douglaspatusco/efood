import { Routes, Route } from 'react-router-dom'
import Perfil from './Pages/Perfil'
import Home from './Pages/Home'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
