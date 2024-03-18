import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  h3 {
    color: ${colors.antiqueWhite};
    margin-bottom: 16px;
    font-size: 16px;
  }

  .spaceBetween {
    display: flex;
    gap: 40px;
    input {
      width: 100%;
    }
  }

  .marginTop {
    margin-top: 16px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid ${colors.antiqueWhite};
    background-color: ${colors.antiqueWhite};
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    color: ${colors.antiqueWhite};
    font-size: 14px;
    font-weight: bold;
  }
`

export const ButtonEntrega = styled.button`
  border: none;
  background-color: ${colors.antiqueWhite};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
`
