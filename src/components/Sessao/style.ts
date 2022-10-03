import styled from "styled-components";

export const Container = styled.div`
    margin: 10em auto;
    width: 20em;
    display: flex;
    flex-direction: column;
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

`