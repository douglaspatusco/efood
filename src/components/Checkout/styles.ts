import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.form`
  margin-top: 32px;

  h3 {
    color: ${colors.antiqueWhite};
    margin-bottom: 16px;
    font-size: 16px;
  }

  .space-between {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    input {
      width: 100%;
    }
  }

  .margin-top {
    margin-top: 16px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid ${colors.antiqueWhite};
    border-radius: 2px;
    background-color: ${colors.antiqueWhite};

    &.error {
      border: 1px solid red;
    }
  }

  p {
    color: ${colors.antiqueWhite};
    font-size: 14px;
    line-height: 22px;
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    color: ${colors.antiqueWhite};
    font-size: 14px;
    font-weight: bold;
  }

  &.cvv-size {
    max-width: 87px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: ${colors.antiqueWhite};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
  border-radius: 2px;
`
