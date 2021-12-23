import styled from 'styled-components'

import banner from '../../assets/home/young-woman.jpg'

export const BackImage = styled.div`
  background: url(${banner}) no-repeat fixed top left;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;

  > div {
    margin: 67px 0 0 207px;

    h1 {
      color: #830985;
      font-size: 4rem;

      span {
        font-family: 'Rosario', sans-serif;
      }
    }
  }

  > img {
    width: 230px;
    position: absolute;
    top: 5%;
    right: 5%;
  }
`
