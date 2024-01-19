import styled from 'styled-components'

import logoimage from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Logotipo = styled(Link)`
  background-image: url(${logoimage});
  width: 125px;
  height: 58px;
`
