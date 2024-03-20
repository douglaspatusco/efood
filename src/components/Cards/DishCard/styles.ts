import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

import dish1 from '../../../assets/images/dish1.png'

export const CardContainer = styled.section`
  width: 320px;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.salmon};
  color: ${colors.antiqueWhite};

  position: relative;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Image = styled.div`
  background-image: url(${dish1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 168px;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const AddButton = styled.div`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  background-color: ${colors.antiqueWhite};
  color: ${colors.salmon};
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  max-width: 960px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${colors.white};
  background-color: ${colors.salmon};

  header {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 8px;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    padding: 0 32px;

    img {
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin-right: 24px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    span {
      display: block;
      font-size: 14px;
      margin: 16px 0;
    }

    button {
      background-color: ${colors.antiqueWhite};
      padding: 4px 8px;
      font-size: 14px;
      border: none;
      color: ${colors.salmon};
      font-weight: bold;
      cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 16px;

    main {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
          margin-top: 16px;
        }
      }
      img {
        margin-right: 0;
      }
    }
  }
`
