import styled from "styled-components";
import banner from '../../assets/img/banner-image.png'

export const Container = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 352px;
    color: #fff;
    display: flex;
    justify-content: end;
    flex-direction: column;
    div {
        margin-left: 7em;
        h1 {
            font-size: 3em;
        }
        p {
            margin: 1em 0;
            font-size: 20px;
            font-weight: 600;
        }
        button {
            background-color: var(--azul);
            color: #fff;
            padding: 1em 2em;
            border: none;
            margin-bottom: 1em;
        }
    }
    @media (max-width: 800px){

        div {
            margin-left: 2em;
            h1 {
                font-size: 1.5em;
            }
            p {
                margin: 1em 0;
                font-size: 20px;
                font-weight: 600;
            }
            button {
                background-color: var(--azul);
                color: #fff;
                padding: 1em 2em;
                border: none;
                margin-bottom: 1em;
            }
        }

    }
    @media (max-width: 400px) {
        background-size: cover;
        width: 100vw;
            div {
            margin-left: 1em;
            h1 {
                font-size: 2em;
                font-weight: 700;
            }
            p {
                margin: .4em 0;
            }
            button {
                background-color: var(--azul);
                color: #fff;
                padding: .8em 1em;
            }
        }
    }
`