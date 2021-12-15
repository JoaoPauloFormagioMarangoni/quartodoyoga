import styled from "styled-components";

import Banner from '../../assets/banner-home.jpg';

export const Container = styled.div`
    background: linear-gradient(180deg, transparent, transparent, #ffffff 100%), url(${Banner}) no-repeat left top;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 140px);
    position: relative;

    div {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        left: 10%;

        h1 {
            color: #ffffff;
            font-size: 2.5rem;
        }

        p {
            color: #ffffff;
            font-size: 1.5rem;
            width: 500px;
            text-align: justify;
            margin: 20px 0;
        }

        span {
            position: relative;

            &:hover .arrow {
                opacity: 1;
                transform: translate(40px, -50%);
                color: var(--purple);
            }
        }

        button {
            padding: 15px 50px;
            border-radius: 10px;
            border: 0;
            background: var(--purple);
            color: #ffffff;
            font-size: 1.2rem;
            transition: filter .2s;

            cursor: pointer;

            &:hover {
                filter: brightness(.9);
            }
        }

        .arrow {
            position: absolute;
            border-radius: 0 10px 10px 0;
            font-size: 2.5rem;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            color: #ffffff;
            opacity: 0;
            transition: all .4s;
        }
    }
`;