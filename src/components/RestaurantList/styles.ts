import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantsList = styled.section`
  max-width: 1024px;
  margin: 60px auto 80px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
    max-width: 100%;
  }
`
