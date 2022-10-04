import styled from "styled-components";


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    .topo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
        h2 {
            color: var(--cinza);
        }
        button {
                width: max-content;
                padding: .8em;
                color: #fff;
                background-color: var(--azul);
                border: none;
            }
    }
    .produtos {
        width: 1120px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`