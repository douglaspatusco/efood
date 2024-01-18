import star from '../../assets/images/estrela.svg'

import Button from '../Button'

import {
  CardContainer,
  CardHeader,
  CardInfo,
  Description,
  Rate,
  RestaurantImage,
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
        <Title>Nome do restaurante</Title>
        <Rate>
          <Title>4.9</Title>
          <img src={star} alt="Avaliação" />
        </Rate>
      </CardHeader>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        doloribus cum repellendus voluptatibus commodi neque temporibus vitae
        repellat fugiat amet assumenda, minus soluta, debitis quos? Fugit odio
        exercitationem ex velit?
      </Description>
      <Button>Saiba mais</Button>
    </CardInfo>
  </CardContainer>
)

const RestaurantCardDestaque = () => (
  <CardContainer>
    <RestaurantImage>
      <TagsContainer>
        <TagDestaque destacado="true">Destaque da semana</TagDestaque>
        <TagTipo>japonesa</TagTipo>
      </TagsContainer>
    </RestaurantImage>
    <CardInfo>
      <CardHeader>
        <Title>Nome do restaurante</Title>
        <Rate>
          <Title>4.9</Title>
          <img src={star} alt="Avaliação" />
        </Rate>
      </CardHeader>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        doloribus cum repellendus voluptatibus commodi neque temporibus vitae
        repellat fugiat amet assumenda, minus soluta, debitis quos? Fugit odio
        exercitationem ex velit?
      </Description>
      <Button>Saiba mais</Button>
    </CardInfo>
  </CardContainer>
)
export { RestaurantCards, RestaurantCardDestaque }
