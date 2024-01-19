import styled from 'styled-components'

import { colors } from '../../styles'

import { Props } from '.'

export const TagStyled = styled.span<Props>`
  background-color: ${colors.salmon};
  color: ${colors.antiqueWhite};
  padding: 6px;
  cursor: pointer;
`
