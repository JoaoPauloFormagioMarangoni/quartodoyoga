import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    width: 100%;

    > img {
        height: 100px;
    }

    nav {
        display: flex;
        align-items: center;

        ul {
            list-style: none;
            display: flex;
            align-items: center;

            li {
                margin-right: 30px;
                font-size: 1.2rem;
                cursor: pointer;

                a {
                    color: var(--grey);
                    text-decoration: none;

                    &:hover {
                        color: var(--purple);
                    }
                }

                &.active {
                    position: relative;
                    transition: all .2s;

                    a {
                        color: var(--purple);
                        font-weight: bold;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: 3px;
                        width: 100%;
                        background: var(--purple);
                        bottom: -5px;
                        left: 0;
                    }
                }
            }
        }

        img {
            width: 6rem;
            height: 5.5rem;
        }
    }
`;