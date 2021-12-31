import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  width: 100%;

  > img {
    height: 100px;
  }

  .openMenu {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      align-items: center;

      li {
        margin-right: 30px;
        font-size: 1.2rem;
        cursor: pointer;

        a {
          color: var(--grey);
          text-decoration: none;

          &:hover {
            color: var(--purple);
          }
        }

        &.active {
          position: relative;
          transition: all 0.2s;

          a {
            color: var(--purple);
            font-weight: bold;
          }

          &::after {
            content: '';
            position: absolute;
            height: 3px;
            width: 100%;
            background: var(--purple);
            bottom: -5px;
            left: 0;
          }
        }
      }
    }

    img {
      width: 6rem;
      height: 5.5rem;
      cursor: pointer;
      z-index: 9999;
    }
  }

  @media (max-width: 1200px) {
    display: block;
    text-align: center;

    > img {
      width: 80%;
      height: auto;
    }

    .openMenu {
      display: block;
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 2.5rem;
      z-index: 999999;
    }

    nav {
      z-index: 99999;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: 0;
      left: -100%;
      background: rgba(32, 36, 33, 0.6);
      width: 250px;
      padding: 70px 0 25px;
      border-radius: 0 0 10px 0;
      transition: left 0.5s;

      &.open {
        left: 0;
      }

      ul {
        flex-direction: column;

        padding: 10px;

        li {
          margin: 5px;
          background: var(--grey);
          width: 100%;
          padding: 10px 20px;
          border-radius: 10px;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }

          a {
            color: #fff;
          }
        }
      }
    }
  }
`

export const ScreenUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: 5px;
  top: 140px;

  background: var(--grey);

  z-index: 999;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  animation: seeUser 1s;
  transform: scale(1);

  @keyframes seeUser {
    0% {
      top: -83px;
      transform: scale(0.1);
      right: 3px;
    }
    100% {
      top: 140px;
      transform: scale(1);
      right: 5px;
    }
  }

  img {
    margin-bottom: 20px;
  }

  span {
    color: #ffffff;
    font-size: 0.9rem;

    &:nth-child(3) {
      margin: 5px 0 20px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    button,
    a {
      width: 100%;
      background: #4c4c52;
      border: 0;
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 1.03rem;
      box-shadow: 1px 2px 3px #000000;
      text-align: center;
      text-decoration: none;

      &:hover {
        filter: brightness(0.8);
      }
    }

    > div {
      display: flex;
      align-items: center;
      gap: 5px;

      button.active {
        border: 1px solid var(--purple);
      }
    }
  }

  &.disabled {
    display: none;
  }

  @media (max-width: 1200px) {
    position: relative;
    top: 0;
    background: transparent;
    animation: 0;

    img {
      display: none;
    }

    &.disabled {
      display: flex;
    }
  }
`

export const ButtonTop = styled.a`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 99999999;

  border-radius: 50%;
  border: 0;
  background: var(--purple);
  color: #fff;

  font-size: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  cursor: pointer;

  box-shadow: 0 3px 0 var(--grey);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0 0;
  }
`
