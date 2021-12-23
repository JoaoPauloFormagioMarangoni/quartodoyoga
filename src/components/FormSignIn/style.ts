import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 500px;
  margin-top: 67px;

  padding: 70px 50px;

  background: #202024;
  border-radius: 10px;

  a {
    color: #830985;
    margin: 5px 0 20px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
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

  p {
    color: #ffffff;
    text-align: center;
  }
`

export const InputConfig = styled.div`
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

  div {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    & .email,
    & .password {
      position: absolute;
      left: 5px;
      font-size: 1.5rem;
      color: #202024;
    }

    & .eye {
      position: absolute;
      right: 5px;
      font-size: 1.5rem;
      color: #202024;
      cursor: pointer;
    }

    & .active {
      color: #830985;
    }
  }
`
