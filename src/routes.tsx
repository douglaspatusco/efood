import { Routes, Route } from 'react-router-dom'

import Restaurant from './Pages/Restaurant'
import Home from './Pages/Home'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Restaurant />} />
    </Routes>
  )
}

export default Rotas
