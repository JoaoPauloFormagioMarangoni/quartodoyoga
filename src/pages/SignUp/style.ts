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
        
        > div {            
            width: 500px;
            padding: 70px 50px;
            
            background: #202024;
            border-radius: 10px;

            h1 {
                color: #ffffff;
                text-align: center;
                margin-bottom: 25px;
                font-size: 2.3rem;
            }

            p {
                color: #ffffff;
                text-align: center;
                margin-bottom: 20px;
            }

            a {
                color: #830985;
                text-decoration: none;
                font-weight: bold;

                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }

                &.backPage {
                    display: flex;
                    align-items: center;

                    .backArrow {
                        font-size: 18pt;
                    }
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
        }

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

        .email, .password, .confirmPassword, .name {
            position: absolute;
            left: 5px;
            font-size: 1.5rem;
            color: #202024;
        }

        .eye {
            position: absolute;
            right: 5px;
            font-size: 1.5rem;
            color: #202024;
        }

        .active {
            color: #830985;
        }
    }
`;