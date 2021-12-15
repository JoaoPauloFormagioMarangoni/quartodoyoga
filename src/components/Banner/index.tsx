import { Container } from "./style";
import { BsArrowRightShort } from 'react-icons/bs';


export function Banner() {
    return (
        <Container>
            <div>
                <h1>Yoga e Respiração</h1>
                <p>
                    A respiração é o pilar básico para nossa existência
                    e também para a prática de Yoga.
                    Sem respiração não sobrevivemos...
                </p>
                <span>
                    <button>Ler mais</button>
                    <BsArrowRightShort className="arrow"/>
                </span>
            </div>
        </Container>
    );
}