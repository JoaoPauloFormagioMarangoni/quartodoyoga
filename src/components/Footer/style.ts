import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  background: linear-gradient(
    180deg,
    #3d103e 0%,
    #000000 99.99%,
    rgba(61, 16, 62, 0) 100%
  );

  img {
    width: 150px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;

  span {
    color: #ffffff;
    font-size: 1.2rem;

    &.copyright {
      font-size: 0.8rem;
      margin-top: 20px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-size: 24pt;

    a {
      color: #ffffff;
    }

    .instagram,
    .twitter,
    .facebook,
    .linkedin {
      cursor: pointer;
    }

    .instagram:hover {
      color: #e1306c;
      border-radius: 10px;
    }

    .twitter:hover {
      color: #1da1f2;
    }

    .facebook:hover {
      color: #4267b2;
    }

    .linkedin:hover {
      color: #0077b5;
    }
  }
`

export const ListNav = styled.div`
  color: #ffffff;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 10px;
      cursor: pointer;

      a {
        color: #ffffff;
        text-decoration: none;
      }

      &.active a {
        color: var(--purple);
        font-weight: bold;
      }
    }
  }
`
