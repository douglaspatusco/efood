import styled from 'styled-components'

import { DefaultContainer, colors } from '../../styles'

export const CoverContainer = styled(DefaultContainer)`
  position: relative;
  display: flex;
  height: 280px;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`

export const CoverImage = styled.div`
  position: relative;
  display: block;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
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
