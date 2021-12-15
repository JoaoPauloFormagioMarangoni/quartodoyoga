import styled from 'styled-components';

import banner from '../../assets/home/young-woman.jpg';

export const BackImage = styled.div`
    background: url(${banner}) no-repeat fixed top left;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    > div {
        display: flex;
        align-items: flex-end;
        gap: 200px;
        
        h2 {
            color: #830985;
            font-size: 4rem;

            height: 190px;
            width: 600px;
            background: rgba(255, 255, 255, 25%);
            padding: 10px;
            border-radius: 10px;

            span {
                font-family: 'Rosario', sans-serif;
            }
        }
    }

    > img {
        width: 230px;
        position: absolute;
        top: 5%;
        right: 5%;
    }
`;
