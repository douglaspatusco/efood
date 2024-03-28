import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { parseToBrl } from '../../utils'
import { getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payment, setPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O cep precisa 8 caracteres')
        .max(8, 'O cep precisa 8 caracteres')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(1, 'O campo precisa ser preenchido')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
      cardName: Yup.string()
        .min(5, 'Insira o nome como consta no cartão')
        .required('Campo Obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Número do cartão inválido')
        .required('Campo Obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Código do cartão inválido')
        .required('Campo Obrigatório'),
      month: Yup.string().required('Campo Obrigatório'),
      year: Yup.string().required('Campo Obrigatório')
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
              month: values.month,
              year: values.year
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
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
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
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
            />
            <small>{getErrorMessage('address', form.errors.address)}</small>
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
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </S.InputGroup>
          <div className="spaceBetween">
            <S.InputGroup>
              <label htmlFor="zipCode">Cep</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
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
              />
              <small>
                {getErrorMessage('houseNumber', form.errors.houseNumber)}
              </small>
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
            />
          </S.InputGroup>
          <div className="marginTop">
            <S.Button
              onClick={() => setPayment(true)}
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Continuar com o pagamento
            </S.Button>
            <S.Button onClick={() => form.handleSubmit}>
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
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
              id="cardNumber"
              type="text"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input
              id="cardCode"
              type="text"
              name="cardCode"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="mes">Mês de vencimento</label>
            <input
              id="month"
              type="text"
              name="month"
              value={form.values.month}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('month', form.errors.month)}</small>
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="year">Ano de vencimento</label>
            <input
              id="year"
              type="text"
              name="year"
              value={form.values.year}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('year', form.errors.year)}</small>
          </S.InputGroup>
          <div className="marginTop">
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

      {payment && isSuccess && data && (
        <>
          <h3> Pedido realizado - {data.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p className="marginTop">
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p className="marginTop">
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p className="marginTop">
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button className="marginTop">Concluir</S.Button>
        </>
      )}
    </S.Container>
  )
}

export default Checkout
