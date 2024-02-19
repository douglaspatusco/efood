import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  background-color: ${colors.salmon};
  color: ${colors.antiqueWhite};
`
