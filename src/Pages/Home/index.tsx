import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (!restaurantes) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
