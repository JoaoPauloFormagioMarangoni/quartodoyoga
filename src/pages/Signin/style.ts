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

    > div {
        margin: 67px 0 0 207px;

        h1 {
            color: #830985;
            font-size: 4rem;

            span {
                font-family: 'Rosario', sans-serif;
            }
        }
        
        > div {
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

                transition: filter .2s;

                &:hover {
                    filter: brightness(.9);
                }

                &:active {
                    filter: brightness(1);
                }
            }

            p {
                color: #ffffff;
                text-align: center;
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

        & .email, & .password {
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
`;