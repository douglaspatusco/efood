import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { clearCart } from '../../store/reducers/cart'
import { closeCheckout } from '../../store/reducers/checkout'

import { parseToBrl } from '../../utils'
import { getTotalPrice } from '../../utils'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart())
    }
  }, [isSuccess, dispatch])

  const returnToCart = () => {
    dispatch(closeCheckout())
    setPayment(false)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('Campo Obrigatório'),
      cardNumber: Yup.string().required('Campo Obrigatório'),
      cardCode: Yup.string().required('Campo Obrigatório'),
      expiresMonth: Yup.string().required('Campo Obrigatório'),
      expiresYear: Yup.string().required('Campo Obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: values.houseNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      form.touched.fullName &&
      !form.errors.address &&
      form.touched.address &&
      !form.errors.city &&
      form.touched.city &&
      !form.errors.zipCode &&
      form.touched.zipCode &&
      !form.errors.houseNumber &&
      form.touched.houseNumber
    ) {
      setPayment(true)
    }
  }

  return (
    <S.Container onSubmit={form.handleSubmit}>
      {!payment && !isSuccess && (
        <>
          <h3>Entrega</h3>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <div className="space-between">
            <S.InputGroup>
              <label htmlFor="zipCode">Cep</label>
              <InputMask
                id="zipCode"
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="houseNumber">Número</label>
              <input
                id="houseNumber"
                type="text"
                name="houseNumber"
                value={form.values.houseNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('houseNumber') ? 'error' : ''}
              />
            </S.InputGroup>
          </div>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </S.InputGroup>
          <div className="margin-top">
            <S.Button
              onClick={goToPayment}
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Continuar com o pagamento
            </S.Button>
            <S.Button
              onClick={returnToCart}
              type="button"
              title="Voltar para o carrinho"
            >
              Voltar para o carrinho
            </S.Button>
          </div>
        </>
      )}

      {payment && !isSuccess && (
        <>
          <h3>Pagamento - Valor a pagar: {parseToBrl(getTotalPrice(items))}</h3>
          <S.InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              type="text"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cardName') ? 'error' : ''}
            />
          </S.InputGroup>
          <div className="space-between">
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>
            <S.InputGroup className="cvv-size">
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                id="cardCode"
                type="text"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </S.InputGroup>
          </div>
          <div className="space-between">
            <S.InputGroup>
              <label htmlFor="mes">Mês de expiração</label>
              <InputMask
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de expiração</label>
              <InputMask
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
              />
            </S.InputGroup>
          </div>
          <div className="margin-top">
            <S.Button
              onClick={() => form.handleSubmit}
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Finalizar pagamento
            </S.Button>
            <S.Button type="button" onClick={() => setPayment(false)}>
              Voltar para a edição de endereço
            </S.Button>
          </div>
        </>
      )}

      {isSuccess && data && (
        <>
          <h3> Pedido realizado - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="margin-top">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="margin-top">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="margin-top">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button className="margin-top" onClick={() => location.reload()}>
            Concluir
          </S.Button>
        </>
      )}
    </S.Container>
  )
}

export default Checkout
