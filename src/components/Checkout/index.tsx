import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { formatPrice } from '../Cards/DishCard'
import { getTotalPrice } from '../Cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import { ButtonEntrega, Container, InputGroup } from './styles'

const Checkout = () => {
  const [payment, setPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroDaCasa: '',
      complemento: '',
      nome: '',
      numero: '',
      codigo: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      nomeCompleto: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O cep precisa 8 caracteres')
        .max(8, 'O cep precisa 8 caracteres')
        .required('O campo é obrigatório'),
      numeroDaCasa: Yup.string()
        .min(1, 'O campo precisa ser preenchido')
        .required('O campo é obrigatório'),
      complemento: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
      nome: Yup.string()
        .min(5, 'Insira o nome como consta no cartão')
        .required('Campo Obrigatório'),
      numero: Yup.string()
        .min(16, 'Número inválido')
        .required('Campo Obrigatório'),
      codigo: Yup.string()
        .min(3, 'Número inválido')
        .required('Campo Obrigatório'),
      mes: Yup.string().required('Campo Obrigatório'),
      ano: Yup.string().required('Campo Obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nomeCompleto,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: values.numeroDaCasa,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nome,
            number: values.numero,
            code: values.codigo,
            expires: {
              month: values.mes,
              year: values.ano
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
    <Container onSubmit={form.handleSubmit}>
      {!payment && !isSuccess && (
        <>
          <h3>Entrega</h3>
          <InputGroup>
            <label htmlFor="nomeCompleto">Quem irá receber</label>
            <input
              id="nomeCompleto"
              type="text"
              name="nomeCompleto"
              value={form.values.nomeCompleto}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('nomeCompleto', form.errors.nomeCompleto)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
          </InputGroup>
          <div className="spaceBetween">
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="numeroDaCasa">Número</label>
              <input
                id="numeroDaCasa"
                type="text"
                name="numeroDaCasa"
                value={form.values.numeroDaCasa}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('numeroDaCasa', form.errors.numeroDaCasa)}
              </small>
            </InputGroup>
          </div>
          <InputGroup>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              id="complemento"
              type="text"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
          <div className="marginTop">
            <ButtonEntrega
              onClick={() => setPayment(true)}
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Continuar com o pagamento
            </ButtonEntrega>
            <ButtonEntrega onClick={() => form.handleSubmit}>
              Voltar para o carrinho
            </ButtonEntrega>
          </div>
        </>
      )}

      {payment && !isSuccess && (
        <>
          <h3>
            Pagamento - Valor a pagar: {formatPrice(getTotalPrice(items))}
          </h3>
          <InputGroup>
            <label htmlFor="nome">Nome no cartão</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={form.values.nome}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('nome', form.errors.nome)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="numero">Número do cartão</label>
            <input
              id="numero"
              type="text"
              name="numero"
              value={form.values.numero}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('numero', form.errors.numero)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="codigo">CVV</label>
            <input
              id="codigo"
              type="text"
              name="codigo"
              value={form.values.codigo}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('codigo', form.errors.codigo)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="mes">Mês de vencimento</label>
            <input
              id="mes"
              type="text"
              name="mes"
              value={form.values.mes}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('mes', form.errors.mes)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="ano">Ano de vencimento</label>
            <input
              id="ano"
              type="text"
              name="ano"
              value={form.values.ano}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('ano', form.errors.ano)}</small>
          </InputGroup>
          <div className="marginTop">
            <ButtonEntrega
              onClick={() => form.handleSubmit}
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Finalizar pagamento
            </ButtonEntrega>
            <ButtonEntrega type="button" onClick={() => setPayment(false)}>
              Voltar para a edição de endereço
            </ButtonEntrega>
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
          <ButtonEntrega className="marginTop">Concluir</ButtonEntrega>
        </>
      )}
    </Container>
  )
}

export default Checkout
