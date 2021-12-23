import styled from 'styled-components'

export const Container = styled.section`
  width: 90vw;
  margin: 0 auto 40px;

  h1 {
    font-size: 2rem;
    margin: 20px 0 20px 60px;
    color: var(--grey);

    animation: titleLeft 1s forwards;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
    row-gap: 50px;

    > div {
      > div:first-child {
        border-radius: 10px 10px 0 0;
        width: 100%;
        overflow: hidden;

        img {
          height: 100%;
          width: inherit;
          object-fit: cover;
          transition: transform 0.2s;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      > div:last-child {
        color: var(--grey);
        margin: 0 10px;

        h2 {
          margin: 10px 0;
          transition: color 0.2s;

          &:hover {
            color: var(--purple);
            cursor: pointer;
          }
        }

        p {
          line-height: 20px;
          text-align: justify;
          transition: color 0.2s;

          &:hover {
            color: var(--purple);
            cursor: pointer;
          }
        }

        > div {
          margin-top: 10px;
          font-size: 0.8rem;
          display: flex;
          justify-content: space-around;
          align-items: center;

          span {
            display: flex;
            align-items: center;

            .watchLater {
              margin-right: 5px;
            }
          }
        }
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
