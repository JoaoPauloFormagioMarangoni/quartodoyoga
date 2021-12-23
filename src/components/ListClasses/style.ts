import styled from 'styled-components'

export const Container = styled.section`
  h2 {
    margin: 20px 0 0 20px;
    font-size: 1.2rem;

    span {
      color: var(--purple);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  hr {
    opacity: 0.3;
  }

  .styles-module_item-container__a8zaY {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .styles-module_carousel-base__3keqD {
    position: relative;
    margin: 20px 0;

    div a {
      position: relative;

      img {
        width: 350px;
        border-radius: 20px;
        box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);

        &:hover {
          filter: brightness(0.9);
        }
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        padding: 5px 10px;
        border-radius: 20px 0;
        color: #fff;
      }
    }
  }

  .styles-module_carousel-arrow__26sRw {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(0);
    border-radius: 50%;
    border: 0;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    background: var(--grey);
    z-index: 999;
  }

  .styles-module_carousel-arrow__26sRw[data-direction='left'] {
    left: 10px;

    &::before {
      content: '';
      background-image: conic-gradient(var(--purple) 20deg, transparent 120deg);
      width: 100%;
      height: 100%;
      border-radius: inherit;
      position: absolute;

      animation: rotate 2s linear infinite;
    }

    &::after {
      content: '<';
      font-weight: bold;
      color: var(--purple);
      font-size: 1.5rem;
      position: absolute;
      z-index: 9999;
      background: #101010;
      border-radius: inherit;
      height: 80%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 6px 6px 5px rgba(0, 0, 0, 0.5);
    }
  }

  .styles-module_carousel-arrow__26sRw[data-direction='right'] {
    right: 10px;

    &::before {
      content: '';
      background-image: conic-gradient(var(--purple) 20deg, transparent 120deg);
      width: 100%;
      height: 100%;
      border-radius: inherit;
      position: absolute;

      animation: rotate 2s linear infinite;
    }

    &::after {
      content: '>';
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--purple);
      position: absolute;
      z-index: 9999;
      background: #101010;
      border-radius: inherit;
      height: 80%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 6px 6px 5px rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const Item = styled.div`
  text-align: center;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
  }
`
