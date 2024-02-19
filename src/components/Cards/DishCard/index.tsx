import { Menu } from '../../../types/api'

import { AddButton, CardContainer, Image, Name, Description } from './styles'

export type Props = {
  dish: Menu
}

const DishCard = ({ dish }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    console.log(descricao)
    return descricao
  }

  return (
    <CardContainer>
      <Image style={{ backgroundImage: `url(${dish.foto})` }} />
      <Name>{dish.nome}</Name>
      <Description>{getDescricao(dish.descricao)}</Description>
      <AddButton to={`/Home`}>Adicionar ao carrinho</AddButton>
    </CardContainer>
  )
}

export default DishCard

// Trocar os Menu types por Restaurant types
