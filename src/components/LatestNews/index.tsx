import { Container } from './styles'
import LatestImg from '../../assets/banner-home.jpg'

export function LatestNews() {
  return (
    <Container>
      <h1>Últimas notícias</h1>
      <div>
        <div className="latestImg">
          <img src={LatestImg} alt="" />
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
          </div>
        </div>
        <div>
          <div className="otherNews">
            <img src={LatestImg} alt="" />
            <div>
              <h2>Yoga e Respiração</h2>
              <p>
                A respiração é o pilar básico para nossa existência e também
                para a prática de Yoga. Sem respiração não sobrevivemos...
              </p>
            </div>
          </div>
          <div className="otherNews">
            <img src={LatestImg} alt="" />
            <div>
              <h2>Yoga e Respiração</h2>
              <p>
                A respiração é o pilar básico para nossa existência e também
                para a prática de Yoga. Sem respiração não sobrevivemos...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
