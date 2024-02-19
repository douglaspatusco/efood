import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Menu } from '../../types/api'

import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Cover from '../../components/Cover'

const Restaurant = () => {
  const { id } = useParams()
  const [dishes, setDishes] = useState<Menu[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDishes(res.cardapio))
  }, [id])

  if (dishes) {
    return (
      <>
        <Header />
        <Cover />
        <DishesList dish={dishes} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Restaurant
