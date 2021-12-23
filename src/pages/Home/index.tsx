import { Banner } from '../../components/Banner'
import { Header } from '../../components/Header'
import { ClassesForBeginners } from './style'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ClassOne from '../../assets/aula1.jpg'
import ClassTwo from '../../assets/aula2.jpg'
import ClassThree from '../../assets/aula3.jpg'
import { HomeNews } from '../../components/HomeNews'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isScrollClasses, setIsScrollClasses] = useState<string>('hidden')
  const [isScrollHomeNews, setIsScrollHomeNews] = useState<string>('hidden')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    if (document.documentElement.scrollTop > 250) {
      setIsScrollClasses('show')
    }
    if (document.documentElement.scrollTop > 800) {
      setIsScrollHomeNews('show')
    }
  }

  return (
    <>
      <Header />
      <Banner />

      <ClassesForBeginners>
        <h2 className={isScrollClasses}>
          Acesse nossas aulas para iniciantes -
          <Link to="/classes">
            Ver todas
            <BsArrowRightShort />
            <div className="lineSeeAll" />
          </Link>
        </h2>
        <ul className={isScrollClasses}>
          <li>
            <img src={ClassOne} alt="Imagem" />
            <div>
              <h3>Aula 01 - Iniciante</h3>
              <h3>Titulo do video</h3>
            </div>
          </li>
          <li>
            <img src={ClassTwo} alt="Imagem" />
            <div>
              <h3>Aula 02 - Iniciante</h3>
              <h3>Titulo do video</h3>
            </div>
          </li>
          <li>
            <img src={ClassThree} alt="Imagem" />
            <div>
              <h3>Aula 03 - Iniciante</h3>
              <h3>Titulo do video</h3>
            </div>
          </li>
        </ul>
      </ClassesForBeginners>

      <HomeNews classType={isScrollHomeNews} />
      <Footer />
    </>
  )
}
