import styled from 'styled-components'
import { colors } from '../../../styles'

import dish1 from '../../../assets/images/dish1.png'
import { ButtonLink } from '../../Button/styles'

export const CardContainer = styled.section`
  width: 320px;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.salmon};
  color: ${colors.antiqueWhite};
`

export const DishImage = styled.div`
  background-image: url(${dish1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 168px;
`

export const AddButton = styled(ButtonLink)`
  background-color: ${colors.antiqueWhite};
  color: ${colors.salmon};
`
