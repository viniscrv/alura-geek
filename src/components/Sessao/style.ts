import styled from "styled-components";

export const Container = styled.div`
    background-color: #F5F5F5;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        width: 20em;
        label {
        margin-bottom: 1.2em;
        text-align: center;
        font-weight: 700;
        color: var(--cinza);
        }
        input {
            padding: .8em 1em;
            margin-bottom: 1em;
        }
        input[type='submit'] {
            padding: 1em 1em;
            background-color: var(--azul);
            border: none;
            color: white;
            cursor: pointer;
        }
    }
    @media (max-width: 400px){
        div {
            padding: 0 1em;
        }
    }

    @keyframes shake {
        25% {transform: translateX(4px)}
        50% {transform: translateX(-4px)}
        75% {transform: translateX(4px)}
    }
`