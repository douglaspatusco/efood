import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import * as S from './styles'

const Cover = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantQuery(id!)

  return (
    <S.CoverImage style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <S.CoverContainer>
        <S.Especialty>{restaurante?.tipo}</S.Especialty>
        <S.RestaurantName>{restaurante?.titulo}</S.RestaurantName>
      </S.CoverContainer>
    </S.CoverImage>
  )
}

export default Cover
