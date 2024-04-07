import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../../assets/images/close.png'
import { add, openCart } from '../../../store/reducers/cart'

import * as S from './styles'
import { parseToBrl } from '../../../utils'

export type Props = {
  dish: Menu
}

const DishCard = ({ dish }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState({
    isVisible: false
  })

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(openCart())
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
      <S.CardContainer>
        <S.Image
          title={dish.nome}
          style={{ backgroundImage: `url(${dish.foto})` }}
        />
        <S.Name>{dish.nome}</S.Name>
        <S.Description>{getDescricao(dish.descricao)}</S.Description>
        <S.AddButton
          title={`Clique aqui para adicionar ${dish.nome} ao carrinho`}
          onClick={() => setModal({ isVisible: true })}
        >
          Adicionar ao carrinho
        </S.AddButton>
      </S.CardContainer>

      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={closeModal} />
          </header>
          <main>
            <img title={dish.nome} src={dish.foto} />
            <div>
              <h3>{dish.nome}</h3>
              <p>{dish.descricao}</p>
              <span>{`Serve: de ${dish.porcao}`}</span>
              <button
                title={'Clique para confirmar'}
                onClick={() => {
                  addToCart()
                  closeModal()
                }}
              >
                Adicionar ao carrinho - {parseToBrl(dish.preco)}
              </button>
            </div>
          </main>
        </S.ModalContent>
        <S.Overlay onClick={closeModal}></S.Overlay>
      </S.Modal>
    </>
  )
}

export default DishCard
