import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import {
  CoverImage,
  CoverContainer,
  Especialty,
  RestaurantName
} from './styles'

const Cover = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantQuery(id!)

  return (
    <CoverImage style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <CoverContainer>
        <Especialty>{restaurante?.tipo}</Especialty>
        <RestaurantName>{restaurante?.titulo}</RestaurantName>
      </CoverContainer>
    </CoverImage>
  )
}

export default Cover
