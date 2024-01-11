import styled from 'styled-components'

import { cores } from '../../styles'

import BgFundo from '../../assets/images/garfo-e-faca.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${BgFundo});
  background-color: ${cores.bege};
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const Slogan = styled.h1`
  margin-bottom: 40px;
  font-weight: 900;
  text-align: center;
`
