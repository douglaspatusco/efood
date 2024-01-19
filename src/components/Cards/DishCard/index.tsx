import { AddButton, CardContainer, DishImage } from './styles'

const DishCard = () => (
  <CardContainer>
    <DishImage />
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <AddButton>Adicionar ao carrinho</AddButton>
  </CardContainer>
)

export default DishCard
