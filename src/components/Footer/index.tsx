import { Link, useLocation } from 'react-router-dom'
import { Container, ListNav, SocialMedia } from './style'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import LogoImg from '../../assets/home/logo.png'

export function Footer() {
  const location = useLocation()

  return (
    <Container>
      <img src={LogoImg} alt="QdY" />
      <SocialMedia>
        <span>Veja nossas redes sociais</span>
        <div>
          <a
            href="http://www.instagram.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="instagram" />
          </a>
          <a href="http://www.twitter.com.br" target="_blank" rel="noreferrer">
            <BsTwitter className="twitter" />
          </a>
          <a href="http://www.facebook.com.br" target="_blank" rel="noreferrer">
            <BsFacebook className="facebook" />
          </a>
          <a href="http://www.linkedin.com.br" target="_blank" rel="noreferrer">
            <BsLinkedin className="linkedin" />
          </a>
        </div>
        <span className="copyright">
          &copy; 2021 Copyright: João Paulo Formagio Marangoni
        </span>
      </SocialMedia>
      <ListNav>
        <h4>Acesse também:</h4>
        <ul>
          <li className={location.pathname === '/home' ? 'active' : ''}>
            <Link to="/home">Pagina inicial</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={location.pathname === '/classes' ? 'active' : ''}>
            <Link to="/classes">Aulas</Link>
          </li>
          <li className={location.pathname === '/blog' ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </ListNav>
    </Container>
  )
}
