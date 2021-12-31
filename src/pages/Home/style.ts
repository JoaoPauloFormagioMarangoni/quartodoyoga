import styled from 'styled-components'

export const ClassesForBeginners = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    display: flex;
    font-size: 2rem;

    a {
      display: flex;
      align-items: center;
      color: var(--purple);
      text-decoration: none;
      position: relative;

      .lineSeeAll {
        position: absolute;
        bottom: 0;
        width: 0%;
        height: 2px;
        left: 0;
        background: var(--purple);
        transition: width 0.2s;
      }

      &:hover .lineSeeAll {
        width: 100%;
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    margin: 35px 0;

    li {
      position: relative;
      width: 300px;
      height: 300px;
      border-radius: 15px;
      box-shadow: 5px 5px 0px 0px var(--purple);
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.27);
        border-radius: 15px;
        padding: 10px 0;

        h3 {
          color: #ffffff;
          font-size: 1.2rem;
          transition: font-size 0.2s;
        }

        transition: padding 0.2s;

        &:hover {
          padding: 20px 0;

          h3 {
            font-size: 1.4rem;
          }
        }
      }

      transition: all 0.2s;

      &:active {
        transform: translate(5px, 5px);
        box-shadow: none;
      }
    }
  }

  h2.hidden,
  ul.hidden {
    opacity: 0;
  }

  h2.show,
  ul.show {
    animation: slide-in 1s forwards;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 940px) {
    h2 {
      padding: 0 20px;
    }

    ul {
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`
