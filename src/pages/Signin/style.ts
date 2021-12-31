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

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    > div {
      margin: 0;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > img {
      width: 120px;
      position: relative;
      margin: 20px; 
    }
  }

  @media (max-width: 600px) {
    h1 {
      margin: 0 10px;
    }
  }
`
