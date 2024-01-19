import styled from 'styled-components'

import { colors } from '../../../styles'

import prato1 from '../../../assets/images/dish-japanese-1.png'
import prato2 from '../../../assets/images/dish-italian-1.png'
import star from '../../../assets/images/rate-star.png'

import { TagStyled } from '../../Tags/styles'

type Props = {
  destacado: string
}

export const CardContainer = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};

  > img {
    max-width: 100%;
  }
`

export const RestaurantImageHighlighted = styled.div`
  background-image: url(${prato1});
  position: relative;
  height: 217px;

  background-repeat: no-repeat;
  background-size: cover;
`

export const RestaurantImage = styled(RestaurantImageHighlighted)`
  background-image: url(${prato2});
`

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 16px;
  top: 16px;
`

export const TagTipo = styled(TagStyled)`
  font-size: 12px;
  cursor: initial;
`

export const TagDestaque = styled(TagTipo)<Props>`
  display: ${(props) => (props.destacado === 'true' ? 'initial' : 'none')};
  margin-right: 8px;
`

export const CardInfo = styled.div`
  padding: 8px;
  width: 472px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Rate = styled.div`
  display: flex;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Star = styled.div`
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;

  width: 21px;
  height: 21px;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0px;
  line-height: 22px;
`
