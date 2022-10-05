import styled from "styled-components";


export const Container = styled.div`
    background-color: #F5F5F5;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
        width: 559px;
        h2 {
        color: var(--cinza);
        font-size: 1.6em;
        margin-bottom: .6em;
        }
        input {
            margin-bottom: .6em;
            padding: .6em .4em;
        }
        textarea {
            margin-bottom: .6em;
            padding: .8em .4em;
        }
        button {
            width: 100%;
            padding: .8em;
            color: #fff;
            background-color: var(--azul);
            border: none;
        }
    }
    @media (max-width: 768px){
        div {
            padding: 0 2em;
        }
    }
    @media (max-width: 400px){
        div {
            padding: 0 1em;
        }
    }

`