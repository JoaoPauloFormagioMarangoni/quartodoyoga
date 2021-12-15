import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    background: #3D103E;

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;

    div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 300px;
        }

        h3 {
            color: #ffffff;
            margin-top: 20px;
            font-size: 1.5rem;

            a {
                text-decoration: underline;
                color: #ffffff;
            }
        }
    }

    > div:last-child {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 620px;

        img {
            transition: all .2s;
            cursor: pointer;
        }

        > img {
            height: 300px;
            width: 100%;
            border-radius: 15px 15px 0 0;

            object-fit: cover;
        }

        div {
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 20px;
            width: 100%;


            img {
                height: 200px;
                object-fit: cover;

                &:first-child {
                    border-radius: 0 0 0 15px;
                }

                &:last-child {
                    border-radius: 0 0 15px 0;
                }
            }
        }

        img:hover {
            filter: brightness(.8);
        }
    }
`;