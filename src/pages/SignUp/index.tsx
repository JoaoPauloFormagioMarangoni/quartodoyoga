import { BackImage, Container, InputConfig } from "./style";
import LogoImg from "../../assets/home/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useState } from "react";

export function SignUp() {
    const [isEyeOpenPassword, setIsEyeOpenPassword] = useState(false);
    const [isEyeOpenConfirmPassword, setIsEyeOpenConfirmPassword] = useState(false);

    return (
        <BackImage>
            <Container>
                <div>
                    <div>
                        <h1>Crie sua conta</h1>
                        <InputConfig>
                            <div>
                                <MdEmail className="email" />
                                <input type="email" placeholder="E-mail" />
                            </div>
                            <div>
                                <MdOutlineDriveFileRenameOutline className="name" />
                                <input type="text" placeholder="Nome" />
                            </div>
                            <div>
                                <RiLockPasswordFill className="password" />
                                <input 
                                    type={isEyeOpenPassword ? "text" : "password"} 
                                    placeholder="Senha"
                                />
                                <RiEyeLine 
                                    onClick={() => setIsEyeOpenPassword(!isEyeOpenPassword)}
                                    className={isEyeOpenPassword ? "eye active" : "eye"}
                                />
                            </div>
                            <div>
                                <RiLockPasswordFill className="confirmPassword" />
                                <input 
                                    type={isEyeOpenConfirmPassword ? "text" : "password"}
                                    placeholder="Confirme sua senha" 
                                />
                                <RiEyeLine 
                                    onClick={() => setIsEyeOpenConfirmPassword(!isEyeOpenConfirmPassword)}
                                    className={isEyeOpenConfirmPassword ? "eye active" : "eye"}
                                />
                            </div>
                        </InputConfig>
                        <p>Ao se cadastrar, você aceita nossos <a href="#">termos de uso</a> e nossa <a href="#">política de privacidade</a>.</p>
                        <button>Cadastrar</button>
                        <a href="/" className="backPage">
                            <HiOutlineArrowSmLeft className="backArrow" />
                            Voltar para o começo
                        </a>
                    </div>
                    <h2>Tenha seu espaço no <span>Quarto do Yoga</span></h2>
                </div>
                <img src={LogoImg} alt="QdY" />
            </Container>
        </BackImage>
    )
}