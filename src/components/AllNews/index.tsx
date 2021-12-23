import { Container } from './styles'
import NewsImg from '../../assets/aula3.jpg'
import { MdOutlineWatchLater } from 'react-icons/md'

export function AllNews() {
  return (
    <Container>
      <h1>Todas as notícias</h1>
      <div>
        <div>
          <div>
            <img src={NewsImg} alt="" />
          </div>
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
            <div>
              <span>Lara Formagio</span>
              <span>
                <MdOutlineWatchLater className="watchLater" />
                22/12/2021
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={NewsImg} alt="" />
          </div>
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
            <div>
              <span>Lara Formagio</span>
              <span>
                <MdOutlineWatchLater className="watchLater" />
                22/12/2021
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={NewsImg} alt="" />
          </div>
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
            <div>
              <span>Lara Formagio</span>
              <span>
                <MdOutlineWatchLater className="watchLater" />
                22/12/2021
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={NewsImg} alt="" />
          </div>
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
            <div>
              <span>Lara Formagio</span>
              <span>
                <MdOutlineWatchLater className="watchLater" />
                22/12/2021
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={NewsImg} alt="" />
          </div>
          <div>
            <h2>Yoga e Respiração</h2>
            <p>
              A respiração é o pilar básico para nossa existência e também para
              a prática de Yoga. Sem respiração não sobrevivemos...
            </p>
            <div>
              <span>Lara Formagio</span>
              <span>
                <MdOutlineWatchLater className="watchLater" />
                22/12/2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
