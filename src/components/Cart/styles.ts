import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  width: 360px;
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 8px 8px 0 8px;

  ul {
    padding: 8px 0;
  }

  ${ButtonLink} {
    display: block;
    background-color: ${colors.antiqueWhite};
    color: ${colors.salmon};
    width: 100%;
    margin-top: 8px;
  }
`

export const Container = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Cart = styled.div`
  .empty-cart-warning {
    color: ${colors.antiqueWhite};
  }

  .none {
    display: none;
  }
`

export const CartItem = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.antiqueWhite};
  padding: 8px;
  margin: 16px 0;
  display: flex;
  position: relative;
  border-radius: 2px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 2px;
  }

  h3 {
    font-size: 18px;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  img:last-child {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 0px;
    cursor: pointer;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 8px 0;
  color: ${colors.antiqueWhite};
  font-weight: bold;
  line-height: 16.41px;
  font-size: 14px;
`

export const PaymentButton = styled.button`
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

  &:hover {
    background-color: ${colors.white};
  }
`
