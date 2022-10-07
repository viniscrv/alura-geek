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
    @media (max-width: 768px){
        .produto-destaque {
            padding: 1.5em;
            img {
                width: 254px;
            }
            div {
                max-height: 182px;
                max-width: 500px;
                h1 {
                    font-size: 1.6em;
                }
                span {
                    line-height: 1.3em;
                }
            }
        }
        .produtos-similares {
            padding: 1.5em;
        }
    }
    @media (max-width: 400px){
        .produto-destaque {
            flex-direction: column;
            padding: 0;
            max-width: 95%;
            img {
                width: 540px;
            }
            div {
                padding: 1em;
            }
        }
        .produtos-similares {
            margin-top: 3em;
            padding: 0;
        }
    }
`