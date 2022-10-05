import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 559px;
    padding: 0 1em;
    margin: 2em auto;
    h2 {
        color: var(--cinza);
        font-size: 1.6em;
        margin-bottom: .5em;
    }
    input {
        margin-bottom: .5em;
        padding: .6em .4em;
    }
    textarea {
        margin-bottom: .5em;
        padding: .8em .4em;
    }
    button {
        width: 100%;
        padding: .8em;
        color: #fff;
        background-color: var(--azul);
        border: none;
    }

`