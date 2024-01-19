import styled from 'styled-components'

import coverart from '../../assets/images/perfil-cover.png'
import { DefaultContainer, colors } from '../../styles'

export const CoverContainer = styled(DefaultContainer)`
  height: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Cover = styled.div`
  background-image: url(${coverart});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`

export const Especialty = styled.h2`
  padding-top: 24px;
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const RestaurantName = styled(Especialty)`
  font-weight: bold;
  padding: 0px 0px 32px 0px;
`
