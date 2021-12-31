import { Container } from './styles'

export function FormContact() {
  return (
    <Container>
      <h2>Mande mensagem em nosso E-mail</h2>
      <form action="">
        <div>
          <label htmlFor="firstName">Primeiro nome</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Sobrenome</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Telefone</label>
          <input type="number" name="phoneNumber" id="phoneNumber" required />
        </div>
        <div className='textAreaStyle'>
          <label htmlFor="messageClient">Digite seu texto</label>
          <textarea name="messageClient" id="messageClient"></textarea>
        </div>
        <input type="reset" value="Resetar campos" />
        <input type="submit" value="Enviar" />
      </form>
    </Container>
  )
}
