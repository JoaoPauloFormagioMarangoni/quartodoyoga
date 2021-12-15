import { Container } from "./style";
import FeaturedImg from '../../assets/banner-home.jpg';
import ClassOne from '../../assets/aula1.jpg';
import ClassThree from '../../assets/aula3.jpg';
import YogaPose from '../../assets/pose-de-yoga-budista.png';

export function HomeNews() {
    return(
        <Container>
            <div>
                <img src={ YogaPose } alt="" />
                <h3>Veja notícias para se aperfeiçoar clicando em <a href="/blog">Blog</a></h3>
            </div>
            <div>
                <img src={ FeaturedImg } alt="" />
                <div>
                    <img src={ ClassOne } alt="" />
                    <img src={ ClassThree } alt="" />
                </div>
            </div>
        </Container>
    );
}