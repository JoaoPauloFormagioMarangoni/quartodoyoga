import { BackImage, Container } from "./style";
import LogoImg from "../../assets/home/logo.png";
import { FormSignUp } from "../../components/FormSignUp";

export default function SignUp() {
    return (
        <BackImage>
            <Container>
                <div>
                    <FormSignUp />
                    <h2>Tenha seu espaço no <span>Quarto do Yoga</span></h2>
                </div>
                <img src={LogoImg} alt="QdY" />
            </Container>
        </BackImage>
    )
}