import { BackImage, Container } from "./style";
import LogoImg from "../../assets/home/logo.png";
import { FormSignIn } from "../../components/FormSignIn";

export default function Signin() {
    return (
        <BackImage>
            <Container>
                <div>
                    <h1>Entre no <span>Quarto do Yoga</span></h1>
                    <FormSignIn />
                </div>
                <img src={LogoImg} alt="QdY" />
            </Container>
        </BackImage>
    )
}