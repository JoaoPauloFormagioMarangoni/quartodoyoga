import { BackImage, Container, InputConfig } from "./style";
import LogoImg from "../../assets/home/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeLine } from "react-icons/ri";
import { useState } from "react";

export function Signin() {
    const [isEyeOpen, setIsEyeOpen] = useState(false);

    return (
        <BackImage>
            <Container>
                <div>
                    <h1>Entre no <span>Quarto do Yoga</span></h1>
                    <div>
                        <InputConfig>
                            <div>
                                <MdEmail className="email" />
                                <input type="email" placeholder="E-mail" />
                            </div>
                            <div>
                                <RiLockPasswordFill className="password" />
                                <input 
                                    type={isEyeOpen ? "text" : "password"} 
                                    placeholder="Senha"
                                />
                                <RiEyeLine 
                                    onClick={() => setIsEyeOpen(!isEyeOpen)}
                                    className={isEyeOpen ? "eye active" : "eye"}
                                />
                            </div>
                        </InputConfig>
                        <a href="/recoverpassword">Esqueci minha senha</a>
                        <button>Entrar</button>
                        <p>Não tem uma conta? <a href="/signup">Clique aqui</a></p>
                    </div>
                </div>
                <img src={LogoImg} alt="QdY" />
            </Container>
        </BackImage>
    )
}