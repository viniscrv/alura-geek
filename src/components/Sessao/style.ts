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
        width: 20em;
        h3 {
        margin-bottom: 1.2em;
        text-align: center;
        font-weight: 700;
        color: var(--cinza);
        }
        input {
            padding: .8em 1em;
            margin-bottom: 1em;
        }
        button {
            padding: 1em 1em;
            background-color: var(--azul);
            border: none;
            color: white;
        }
    }
    @media (max-width: 400px){
        div {
            padding: 0 1em;
        }
    }
`