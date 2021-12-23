import { Link } from 'react-router-dom'
import { Container, Item } from './style'
import Video from '../../assets/aula1.jpg'
import { Carousel } from '@trendyol-js/react-carousel'

export function ListClasses() {
  return (
    <Container>
      <hr />
      <h2>
        Ultimos videos | <span>Ver todos</span>
      </h2>
      <Carousel show={3.5} slide={3} swiping={true}>
        <div>
          <Link to="/">
            <div>
              <img src={Video} alt="" />
              <span>00:10:00</span>
            </div>
          </Link>
          <Item>
            <h2>Titulo do video</h2>
            <p>Postado por Lara Formagio Marangoni</p>
          </Item>
        </div>
        <div>
          <Link to="/">
            <div>
              <img src={Video} alt="" />
              <span>00:10:00</span>
            </div>
          </Link>
          <Item>
            <h2>Titulo do video</h2>
            <p>Postado por Lara Formagio Marangoni</p>
          </Item>
        </div>
        <div>
          <Link to="/">
            <div>
              <img src={Video} alt="" />
              <span>00:10:00</span>
            </div>
          </Link>
          <Item>
            <h2>Titulo do video</h2>
            <p>Postado por Lara Formagio Marangoni</p>
          </Item>
        </div>
        <div>
          <Link to="/">
            <div>
              <img src={Video} alt="" />
              <span>00:10:00</span>
            </div>
          </Link>
          <Item>
            <h2>Titulo do video</h2>
            <p>Postado por Lara Formagio Marangoni</p>
          </Item>
        </div>
        <div>
          <Link to="/">
            <div>
              <img src={Video} alt="" />
              <span>00:10:00</span>
            </div>
          </Link>
          <Item>
            <h2>Titulo do video</h2>
            <p>Postado por Lara Formagio Marangoni</p>
          </Item>
        </div>
      </Carousel>
    </Container>
  )
}
