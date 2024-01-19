import {
  RestaurantCards,
  RestaurantCardHighlighted
} from '../Cards/RestaurantCard'

import { RestaurantsList } from './styles'

const Restaurants = () => (
  <RestaurantsList>
    <RestaurantCardHighlighted />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
    <RestaurantCards />
  </RestaurantsList>
)

export default Restaurants
