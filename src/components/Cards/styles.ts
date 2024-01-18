import styled from 'styled-components'

import { cores } from '../../styles'

import prato1 from '../../assets/images/prato1.png'
import { TagStyled } from '../Tags/styles'

type Props = {
  destacado: string
}

export const CardContainer = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: #fff;

  border: 1px solid ${cores.vermelho};

  > img {
    max-width: 100%;
  }
`

export const RestaurantImage = styled.div`
  background-image: url(${prato1});
  position: relative;
  height: 217px;

  background-repeat: no-repeat;
  background-size: cover;
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

export const Description = styled.p`
  margin: 16px 0px;
`
