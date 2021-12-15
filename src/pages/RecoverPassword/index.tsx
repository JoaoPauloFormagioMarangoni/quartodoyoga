import { BackImage, Container } from "./style";
import LogoImg from "../../assets/home/logo.png";
import { MdEmail } from "react-icons/md";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export default function RecoverPassword() {
    return (
        <BackImage>
            <Container>
                <div>
                    <h1>Recuperar senha</h1>
                    <div>
                        <MdEmail className="email" />
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <button>Recuperar</button>
                    <a href="/">
                        <HiOutlineArrowSmLeft className="backArrow" />
                        Voltar
                    </a>
                </div>
                <img src={LogoImg} alt="QdY" />
            </Container>
        </BackImage>
    )
}