import { Container } from './styles'
import { FiPhone } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'

export function PhoneAndChat() {
  return (
    <Container>
      <div>
        <FiPhone />
        <div>
          <p>Ligue para o número</p>
          <span>&#40;19&#41; 99999-9999</span>
        </div>
      </div>
      <div>
        <ImWhatsapp />
        <div>
          <p>Clique no botão para conversar pelo Whatsapp</p>
          <a
            href="https://wa.me/19982254621"
            target="_blank"
          >
            Conversar com Lara
          </a>
        </div>
      </div>
    </Container>
  )
}
