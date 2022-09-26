import styled from "styled-components";

export const Container = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        margin: 3em 0 1em 0;
            h2 {
                color: var(--cinza);
                font-weight: 700;
            }
            a {
                color: var(--azul);
                text-decoration: none;
                font-weight: 700;
            }
        }
    .produtos {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        div {
            display: flex;
            flex-direction: column;
            width: 176px;
            .titulo {
                margin-top: .4em;
            }
            .preco {
                margin: .4em 0;
                font-weight: 700;
                color: var(--cinza);
            }
            a {
                color: var(--azul);
                text-decoration: none;
                font-weight: 700;
            }
        }
    }
`