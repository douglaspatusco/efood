import Button from '../../Button'

import * as S from './styles'

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
    <S.CardContainer>
      <S.RestaurantImage style={{ backgroundImage: `url(${capa})` }}>
        <S.TagsContainer>
          {destacado === true ? (
            <S.Tag destacado={destacado}>Destaque da Semana</S.Tag>
          ) : null}
          <S.Tag>{tipo}</S.Tag>
        </S.TagsContainer>
      </S.RestaurantImage>
      <S.CardInfo>
        <S.CardHeader>
          <S.Title>{titulo}</S.Title>
          <S.Rate>
            <S.Title>{avaliacao}</S.Title>
            <S.Star />
          </S.Rate>
        </S.CardHeader>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <Button
          title={`Clique aqui para ver o cardápio do restaurante ${titulo}`}
          to={`/profile/${restaurant.id}`}
        >
          Saiba mais
        </Button>
      </S.CardInfo>
    </S.CardContainer>
  )
}

export default RestaurantCard
