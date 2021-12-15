import { FormEvent, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Container, InputConfig } from "./style";

export function FormSignIn() {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const navigate = useNavigate();

    function handleSignIn(event: FormEvent) {
        event.preventDefault();
        navigate('/home')
    }

    return (
        <Container onSubmit={handleSignIn}>
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
            <button type="submit">Entrar</button>
            <p>Não tem uma conta? <a href="/signup">Clique aqui</a></p>
        </Container>
    );
}