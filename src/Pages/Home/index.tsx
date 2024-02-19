import { useEffect, useState } from 'react'

import { Restaurant } from '../../types/api'

import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  console.log(restaurants)

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}
export default Home
