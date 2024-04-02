import { useParams } from 'react-router-dom'

import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Cover from '../../components/Cover'

import { useGetMenuQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const { data: dishes } = useGetMenuQuery(id!)

  if (!dishes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Cover />
      <DishesList dish={dishes.cardapio} />
      <Footer />
    </>
  )
}
export default Restaurant
