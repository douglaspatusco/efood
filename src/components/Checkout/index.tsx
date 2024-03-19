import { useFormik } from 'formik'
import { ButtonEntrega, Container, InputGroup } from './styles'
import * as Yup from 'yup'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  const form = useFormik({
    initialValues: {
      nomeCompleto: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroDaCasa: '',
      complemento: ''
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
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      complemento: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      )
    }),
    onSubmit: (values) => {
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
          onClick={() => form.handleSubmit}
          type="submit"
          title="Clique aqui para finalizar a compra"
        >
          Continuar com o pagamento
        </ButtonEntrega>
        <ButtonEntrega onClick={() => setPayment(false)}>
          Voltar para o carrinho
        </ButtonEntrega>
      </div>
    </Container>
  )
}

export default Checkout
