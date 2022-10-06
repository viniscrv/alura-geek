import styled from "styled-components";

export const Container = styled.div`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    .produto-destaque {
        display: flex;
        align-items: center;
        max-width: 1120px;
        margin: 0 auto;
        img {
            width: 560px;
        }
        div {
            padding-left: 2em;
            h1 {
                color: var(--cinza);
            }
            span {
                font-weight: 700;
                line-height: 2.5em;
            }
            p {
                color: var(--cinza);
            }
        }
    }
    .produtos-similares {
        max-width: 1120px;
        width: 100%;
        margin: 0 auto;
    }
`