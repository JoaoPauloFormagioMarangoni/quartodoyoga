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
  height: 100vh;
  align-items: center;

  > div {
    margin-left: 207px;
    width: 500px;
    padding: 50px;
    border-radius: 10px;
    background: #202024;

    h1 {
      color: #ffffff;
      font-size: 3rem;
      text-align: center;
      margin-top: 30px;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;

      margin: 40px 0;

      input {
        width: 100%;
        padding: 15px 0 15px 35px;
        border-radius: 5px;
        border: 0;
        font-size: 1.1rem;

        &:focus {
          outline: 3px solid #830985;
        }
      }

      & .email {
        position: absolute;
        left: 5px;
        font-size: 1.5rem;
        color: #202024;
      }
    }

    button {
      width: 100%;
      padding: 15px 0;
      border-radius: 5px;
      border: 0;
      background: #830985;
      color: #ffffff;
      font-size: 1.3rem;

      margin-bottom: 5px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      &:active {
        filter: brightness(1);
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      color: #ffffff;
      margin: 5px 0 20px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      .backArrow {
        font-size: 17pt;
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
