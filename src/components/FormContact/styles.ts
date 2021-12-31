import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px 30px;
  max-width: 100%;

  H2 {
    font-size: 1.7rem;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      input {
        width: 200px;
        height: 33px;
        border-radius: 5px;
        margin: 0 10px 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);

        &:focus {
          outline-color: var(--purple);
        }
      }

      &.textAreaStyle {
        width: 100%;
        margin: 0 20px;

        textarea {
          width: 100%;
          min-height: 150px;
          resize: vertical;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;

          padding: 15px;
          font-size: 1rem;

          &:focus {
            outline-color: var(--purple);
          }
        }
      }
    }

    input[type='submit'],
    input[type='reset'] {
      margin-top: 20px;
      width: 200px;
      height: 33px;
      border-radius: 5px;
      border: 0;
      color: #fff;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    input[type='submit'] {
      margin-left: 20px;
      background: var(--purple);
    }

    input[type='reset'] {
      background: var(--grey);
    }
  }

  @media (max-width: 1740px) {
    form {
      input[type='submit'] {
        margin-left: 0;
      }
    }
  }
`
