import { Menu } from '../../../types/api'

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

export type Props = {
  dish: Menu
}

const DishCard = ({ dish }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false
  })

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
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
              <button>Adicionar ao carrinho - {formatPrice(dish.preco)}</button>
            </div>
          </main>
        </ModalContent>
        <Overlay onClick={closeModal}></Overlay>
      </Modal>
    </>
  )
}

export default DishCard
