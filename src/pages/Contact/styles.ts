import styled from 'styled-components'

import banner from '../../assets/aula2.jpg'

export const Container = styled.div`
  > div:first-child {
    background: url(${banner}) no-repeat left top;
    background-size: cover;
    width: 100%;
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    max-width: 60vw;
    margin: auto;

    background: var(--background);
    border-radius: 5px;

    padding: 20px;
    margin-top: -100px;
    margin-bottom: 50px;
  }

  @media (max-width: 1050px) {
    > div:last-child {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 530px) {
    > div:first-child {
      h1 {
        padding: 20px;
      }
    }

    > div:last-child {
      max-width: 100vw;
    }
  }
`
