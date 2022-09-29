import styled from "styled-components";

export const Container = styled.div`
    margin: 2em 0;
    background-color: #EAF2FD;
    .informacoes {
        display: flex;
        justify-content: space-between;
        width: 1120px;
        margin: 0 auto;
        padding: 4em 0;
        .lista {
            ul {
                list-style: none;
                li {
                    line-height: 2.4em;
                    a {
                        text-decoration: none;
                        color: var(--cinza);
                        font-weight: 700;
                    }
                }
            }
        }
        .contato {
            display: flex;
            flex-direction: column;
            #nome {
                width: 400px;
                margin: 1em 0;
                padding: .6em;
            }
            #mensagem {
                padding: .6em ;
                height: 5em;
            }
            button {
                margin-top: 1em;
                width: max-content;
                padding: .7em;
                color: #fff;
                background-color: var(--azul);
                border: none;
            }
        }
    }
    .desenvolvimento {
        text-align: center;
        background-color: #fff;
    }

    @media (max-width: 400px){
        .informacoes {
            width: 100vw;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            img {
                width: 240px;
            }
            .lista {
                margin: 1em 0;
                text-align: center;
            }
            .contato {
                padding: 1em;
                width: 100%;
                #nome {
                    width: 100%;
                }
            }
        }
    }
`
