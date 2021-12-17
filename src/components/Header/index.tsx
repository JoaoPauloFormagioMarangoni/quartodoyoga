import { Container, ScreenUser } from "./style";
import LogoImg from '../../assets/home/LogoPNG.png';
import NoLogin from '../../assets/home/fundo-login.png';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

export function Header() {
    const { t } = useTranslation()
    const location = useLocation();

    const [isUserActive, setIsUserActive] = useState(false);
    const [languageSelect, setLanguageSelect] = useState(2);

    function handleChangeLanguage(which: number) {
        if (which === 1) {
            i18n.changeLanguage('en-US')
            setLanguageSelect(1)
        } else {
            i18n.changeLanguage('pt-BR')
            setLanguageSelect(2)
        }
    }

    return (
        <Container>
            <img src={LogoImg} alt="Quarto do Yoga" />
            <nav>
                <ul>
                    <li
                        className={location.pathname === '/home' ? 'active' : ''}
                    >
                        <Link to="/home">
                            {t('Pagina inicial')}
                        </Link>
                    </li>
                    <li
                        className={location.pathname === '/about' ? 'active' : ''}
                    >
                        <Link to="/about">
                            {t('Sobre')}
                        </Link>
                    </li>
                    <li
                        className={location.pathname === '/classes' ? 'active' : ''}
                    >
                        <Link to="/classes">
                            {t('Aulas')}
                        </Link>
                    </li>
                    <li
                        className={location.pathname === '/blog' ? 'active' : ''}
                    >
                        <Link to="/blog">
                            {t('Blog')}
                        </Link>
                    </li>
                    <li
                        className={location.pathname === '/contact' ? 'active' : ''}
                    >
                        <Link to="/contact">
                            {t('Contato')}
                        </Link>
                    </li>
                </ul>
                <img src={NoLogin} alt="Usuário" onClick={() => setIsUserActive(!isUserActive)} />
                <ScreenUser className={!isUserActive ? "disabled" : ""}>
                    <img src={NoLogin} alt="Usuário" />
                    <span>Nome do usuário</span>
                    <span>E-mail</span>
                    <div>
                        <button>{t('Alterar informações')}</button>
                        <div>
                            <button
                                onClick={() => handleChangeLanguage(1)}
                                className={languageSelect === 1 ? "active" : ""}
                            >
                                {t('Inglês')}
                            </button>
                            <button
                                onClick={() => handleChangeLanguage(2)}
                                className={languageSelect === 2 ? "active" : ""}
                            >
                                {t('Português')}
                            </button>
                        </div>
                        <button>{t('Sair')}</button>
                    </div>
                </ScreenUser>
            </nav>
        </Container>
    );
}