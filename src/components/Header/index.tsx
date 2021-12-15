import { Container } from "./style";
import LogoImg from '../../assets/home/LogoPNG.png';
import NoLogin from '../../assets/home/fundo-login.png';
import { Link, useLocation } from "react-router-dom";

export function Header() {
    const location = useLocation();

    return(
        <Container>
            <img src={LogoImg} alt="Quarto do Yoga" />
            <nav>
                <ul>
                    <li 
                        className={location.pathname === '/home' ? 'active' : ''}
                    >
                        <Link to="/home">
                            Pagina inicial
                        </Link>
                    </li>
                    <li 
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        <Link to="/about">
                            Sobre
                        </Link>
                    </li>
                    <li 
                        className={location.pathname === '/classes' ? 'active' : ''}
                    >
                        <Link to="/classes">
                            Aulas
                        </Link>
                    </li>
                    <li 
                        className={location.pathname === '/blog' ? 'active' : ''}
                    >
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li 
                        className={location.pathname === '/contact' ? 'active' : ''}
                    >
                        <Link to="/contact">
                            Contato
                        </Link>
                    </li>
                </ul>
                <img src={NoLogin} alt="Usuário" />
            </nav>
        </Container>
    );
}