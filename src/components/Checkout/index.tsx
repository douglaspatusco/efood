import { ButtonEntrega, Container, InputGroup } from './styles'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  return (
    <Container>
      <h3>Entrega</h3>
      <InputGroup>
        <label htmlFor="nomeCompleto">Quem irá receber</label>
        <input id="nomeCompleto" type="text" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="endereco">Endereço</label>
        <input id="endereco" type="text" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" type="text" />
      </InputGroup>
      <div className="spaceBetween">
        <InputGroup>
          <label htmlFor="cep">CEP</label>
          <input id="cep" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="numeroDaCasa">Número</label>
          <input id="numeroDaCasa" type="text" />
        </InputGroup>
      </div>
      <InputGroup>
        <label htmlFor="complemento">Complemento (opcional)</label>
        <input id="complemento" type="text" />
      </InputGroup>
      <div className="marginTop">
        <ButtonEntrega>Continuar com o pagamento</ButtonEntrega>
        <ButtonEntrega onClick={() => setPayment(false)}>
          Voltar para o carrinho
        </ButtonEntrega>
      </div>
    </Container>
  )
}

export default Checkout
