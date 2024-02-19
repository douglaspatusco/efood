import { Restaurant } from '../../../types/api'

import Button from '../../Button'

import {
  CardContainer,
  CardHeader,
  CardInfo,
  Description,
  Rate,
  RestaurantImage,
  Star,
  Tag,
  TagsContainer,
  Title
} from './styles'

export type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { titulo, destacado, tipo, avaliacao, descricao, capa } = restaurant

  const getDescricao = (descricao: string) => {
    if (descricao.length > 192) {
      return descricao.slice(0, 190) + '...'
    }
    console.log(descricao)
    return descricao
  }

  return (
    <CardContainer>
      <RestaurantImage style={{ backgroundImage: `url(${capa})` }}>
        <TagsContainer>
          {destacado === true ? (
            <Tag destacado={destacado}>Destaque da Semana</Tag>
          ) : null}
          <Tag>{tipo}</Tag>
        </TagsContainer>
      </RestaurantImage>
      <CardInfo>
        <CardHeader>
          <Title>{titulo}</Title>
          <Rate>
            <Title>{avaliacao}</Title>
            <Star />
          </Rate>
        </CardHeader>
        <Description>{getDescricao(descricao)}</Description>
        <Button>Saiba mais</Button>
      </CardInfo>
    </CardContainer>
  )
}

export default RestaurantCard
