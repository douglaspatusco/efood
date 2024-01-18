import styled from 'styled-components'

import { cores } from '../../styles'

import { Props } from '.'

export const TagStyled = styled.span<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px;
  cursor: pointer;
`
