import RestaurantCard from '../Cards/RestaurantCard'

import { Restaurant } from '../../types/api'

import { RestaurantsList } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <RestaurantsList>
      {restaurants.map((rest) => (
        <li key={rest.id}>
          <RestaurantCard restaurant={rest} />
        </li>
      ))}
    </RestaurantsList>
  )
}

export default RestaurantList
