import { RestaurantCards, RestaurantCardDestaque } from '../Cards'

import { RestaurantsList } from './styles'

const Restaurants = () => (
  <RestaurantsList>
    <RestaurantCardDestaque />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
  </RestaurantsList>
)

export default Restaurants
