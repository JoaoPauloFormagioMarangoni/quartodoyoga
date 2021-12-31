import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px 20px;

    font-size: 1.2rem;
  }

  > div:first-child {
    div {
      p {
        margin-bottom: 10px;
      }

      span {
        color: var(--purple);
      }
    }
  }

  > div:last-child {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin-bottom: 10px;
      }

      a {
        color: #fff;
        text-decoration: none;
        display: inline-block;

        padding: 8px 13px;
        margin: 10px 0;
        background: var(--purple);
        border-radius: 5px;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`
