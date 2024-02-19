import DishCard from '../Cards/DishCard'

import { Menu } from '../../types/api'

import { DishList } from './styles'

type Props = {
  dish: Menu[]
}

const DishesList = ({ dish }: Props) => {
  return (
    <DishList>
      {dish.map((rest) => (
        <li key={rest.id}>
          <DishCard dish={rest} />
        </li>
      ))}
    </DishList>
  )
}

export default DishesList
