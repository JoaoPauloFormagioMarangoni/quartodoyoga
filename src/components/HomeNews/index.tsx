import { Container } from './style'
import FeaturedImg from '../../assets/banner-home.jpg'
import ClassOne from '../../assets/aula1.jpg'
import ClassThree from '../../assets/aula3.jpg'
import YogaPose from '../../assets/pose-de-yoga-budista.png'

interface PropsClassName {
  classType: string;
}

export function HomeNews({ classType }: PropsClassName) {
  return (
    <Container>
      <div className={classType}>
        <img src={YogaPose} alt="" />
        <h3>
          Veja notícias para se aperfeiçoar clicando em <a href="/blog">Blog</a>
        </h3>
      </div>
      <div className={classType}>
        <img src={FeaturedImg} alt="" />
        <div>
          <img src={ClassOne} alt="" />
          <img src={ClassThree} alt="" />
        </div>
      </div>
    </Container>
  )
}
