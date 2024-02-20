import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurant } from '../../types/api'

import {
  CoverImage,
  CoverContainer,
  Especialty,
  RestaurantName
} from './styles'

const Cover = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
      })
  }, [id])

  return (
    <CoverImage style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <CoverContainer>
        <Especialty>{restaurant?.tipo}</Especialty>
        <RestaurantName>{restaurant?.titulo}</RestaurantName>
      </CoverContainer>
    </CoverImage>
  )
}

export default Cover
