import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

import BgFundo from '../../assets/images/garfo-e-faca.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${BgFundo});
  background-color: ${colors.antiqueWhite};

  @media (max-width: ${breakpoints.desktop}) {
    height: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
  }
`

export const Slogan = styled.h1`
  font-weight: 900;
  text-align: center;
  font-size: 36px;
`
