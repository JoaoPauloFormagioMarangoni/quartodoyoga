import styled from 'styled-components'

export const Container = styled.main`
  width: 90vw;

  margin: 20px auto;

  h1 {
    font-size: 2rem;
    margin: 20px 0 20px 60px;
    color: var(--grey);

    animation: titleLeft 1s forwards;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;

      transition: transform 1s;
    }

    div.latestImg,
    div.otherNews {
      width: calc(90vw / 2);

      &:hover img {
        transform: scale(1.2);
      }
    }

    div.latestImg {
      overflow: hidden;
      border-radius: 10px;
      position: relative;
      cursor: pointer;

      img {
        height: 350px;
      }

      > div {
        position: absolute;
        height: 40%;
        width: 50%;
        background: rgba(32, 32, 36, 0.4);
        left: 0;
        bottom: 0;
        border-radius: 0 20px 0 0;
        padding: 20px;
        color: #fff;
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      &.otherNews {
        overflow: hidden;
        border-radius: 10px;
        position: relative;

        > div {
          position: absolute;
          height: 100%;
          width: 50%;
          background: rgba(32, 32, 36, 0.4);
          left: 0;
          bottom: 0;
          padding: 20px;
          color: #fff;
          cursor: pointer;
        }
      }

      img {
        height: calc(350px / 2 - 10px);
      }
    }
  }

  @keyframes titleLeft {
    from {
      margin: 20px 0 20px 0px;
    }
    to {
      margin: 20px 0 20px 60px;
    }
  }
`
