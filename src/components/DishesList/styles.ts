import styled from 'styled-components'
import { DefaultContainer, breakpoints } from '../../styles'

export const DishList = styled(DefaultContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin: 56px auto 120px;

  @media (max-width: ${breakpoints.desktop}) {
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    width: 95%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 95%;
  }
`
