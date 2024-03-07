import { Menu } from '../../../types/types'

import {
  AddButton,
  CardContainer,
  Image,
  Name,
  Description,
  Modal,
  ModalContent,
  Overlay
} from './styles'

import close from '../../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../../store/reducers/cart'

export type Props = {
  dish: Menu
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const DishCard = ({ dish }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState({
    isVisible: false
  })

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
  }

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 122) + '...'
    }
    console.log(descricao)
    return descricao
  }

  return (
    <>
      <CardContainer>
        <Image style={{ backgroundImage: `url(${dish.foto})` }} />
        <Name>{dish.nome}</Name>
        <Description>{getDescricao(dish.descricao)}</Description>
        <AddButton onClick={() => setModal({ isVisible: true })}>
          Adicionar ao carrinho
        </AddButton>
      </CardContainer>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={closeModal} />
          </header>
          <main>
            <img src={dish.foto} />
            <div>
              <h3>{dish.nome}</h3>
              <p>{dish.descricao}</p>
              <span>{`Serve: de ${dish.porcao}`}</span>
              <button
                onClick={() => {
                  addToCart()
                  closeModal()
                }}
              >
                Adicionar ao carrinho - {formatPrice(dish.preco)}
              </button>
            </div>
          </main>
        </ModalContent>
        <Overlay onClick={closeModal}></Overlay>
      </Modal>
    </>
  )
}

export default DishCard
