import { AddButton, CardContainer, Image, Name, Description } from './styles'

const DishCard = () => (
  <CardContainer>
    <Image />
    <Name>Pizza Marguerita</Name>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <AddButton to={`/Home`}>Adicionar ao carrinho</AddButton>
  </CardContainer>
)

export default DishCard
