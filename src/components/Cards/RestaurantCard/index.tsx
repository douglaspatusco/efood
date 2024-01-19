import Button from '../../Button'

import {
  CardContainer,
  CardHeader,
  CardInfo,
  Description,
  Rate,
  RestaurantImageHighlighted,
  RestaurantImage,
  Star,
  TagDestaque,
  TagTipo,
  TagsContainer,
  Title
} from './styles'

const RestaurantCards = () => (
  <CardContainer>
    <RestaurantImage>
      <TagsContainer>
        <TagTipo>japonesa</TagTipo>
      </TagsContainer>
    </RestaurantImage>
    <CardInfo>
      <CardHeader>
        <Title>La Dolce Vita Trattoria</Title>
        <Rate>
          <Title>4.9</Title>
          <Star />
        </Rate>
      </CardHeader>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Button>Saiba mais</Button>
    </CardInfo>
  </CardContainer>
)

const RestaurantCardHighlighted = () => (
  <CardContainer>
    <RestaurantImageHighlighted>
      <TagsContainer>
        <TagDestaque destacado="true">Destaque da semana</TagDestaque>
        <TagTipo>japonesa</TagTipo>
      </TagsContainer>
    </RestaurantImageHighlighted>
    <CardInfo>
      <CardHeader>
        <Title>Hioki Sushi</Title>
        <Rate>
          <Title>4.9</Title>
          <Star />
        </Rate>
      </CardHeader>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.
        <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </Description>
      <Button>Saiba mais</Button>
    </CardInfo>
  </CardContainer>
)
export { RestaurantCards, RestaurantCardHighlighted }
