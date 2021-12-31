import { Footer } from "../../components/Footer";
import { FormContact } from "../../components/FormContact";
import { Header } from "../../components/Header";
import { PhoneAndChat } from "../../components/PhoneAndChat";
import { Container } from "./styles";

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Entre em contato para tirar suas dúvidas</h1>
        </div>
        <div>
          <PhoneAndChat />
          <FormContact />
        </div>
      </Container>
      <Footer />
    </>
  )
}
