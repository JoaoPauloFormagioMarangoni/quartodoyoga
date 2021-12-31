import { Container } from './styles'
import NewsImg from '../../assets/aula3.jpg'
import { MdOutlineWatchLater } from 'react-icons/md'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import { useEffect, useState } from 'react'
// import api from '../../services/api'

// interface PropsVideos {
//   id: Number
//   imgBackground: string
//   title: string
//   description: string
//   author: string
//   date: string
// }

export function AllNews() {
  // const [infoVideos, setInfoVideos] = useState<PropsVideos[]>([])
  // const [hasMoreVideo, setHasMoreVideo] = useState(true)
  // const [page, setPage] = useState(2)

  // useEffect(() => {
  //   async function handleLoadingApi() {
  //     const response = await api.get(
  //       `http://localhost:3000/Videos?_page=1&_limit=6`,
  //     )

  //     setInfoVideos(response.data)
  //   }

  //   handleLoadingApi()
  // }, [])
  // async function handleFetchData() {
  //   const response = await api.get(
  //     `http://localhost:3000/Videos?_page=${page}&_limit=6`,
  //   )

  //   if (response.data.length === 0 || response.data.length < 6) {
  //     setHasMoreVideo(false)
  //   }

  //   setPage(page + 1)
  //   setInfoVideos([...infoVideos, ...response.data])
  // }
  return (
    <Container>
      <h1>Todas as notícias</h1>
      {/* <InfiniteScroll
        dataLength={infoVideos.length}
        next={handleFetchData}
        hasMore={hasMoreVideo}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Parabéns, você chegou no final</b>
          </p>
        }
      >
        {infoVideos.map((info) => (
          <div key={info.id.toString()}>
            <div>
              <img src={NewsImg} alt="Imagem do video" />
            </div>
            <div>
              <h2>{info.title}</h2>
              <p>{info.description}</p>
              <div>
                <span>{info.author}</span>
                <span>
                  <MdOutlineWatchLater className="watchLater" />
                  {info.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll> */}
      <div className="infinite">
        <div>
          <div>
            <img src={NewsImg} alt="Imagem do video" />
          </div>
          <div>
            <h2>Yoga e Respiração3</h2>
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
            <img src={NewsImg} alt="Imagem do video" />
          </div>
          <div>
            <h2>Yoga e Respiração3</h2>
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
            <img src={NewsImg} alt="Imagem do video" />
          </div>
          <div>
            <h2>Yoga e Respiração3</h2>
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
            <img src={NewsImg} alt="Imagem do video" />
          </div>
          <div>
            <h2>Yoga e Respiração3</h2>
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
