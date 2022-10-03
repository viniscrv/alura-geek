import styled from "styled-components";

export const Container = styled.div`
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
    @media (max-width: 768px){
        .informacoes {
            flex-direction: column;
            max-height: 500px;
            max-width: 704px;
            flex-wrap: wrap;
            align-items: center;
            div {
                align-self: start;
            }
            .contato {
                align-self: start;
            }
        }
    }
    @media (max-width: 400px){
        width: 400px;
        .informacoes {
            max-width: 400px;
            max-height: 100%;
            flex-wrap: nowrap;
            div{
                align-self: center;
                img {
                width: 240px;
            } 
            }
            .lista {
                margin: 1em 0;
                text-align: center;
            }
            .contato {
                padding: 1em;
                width: 100%;
                #nome {
                    width: 90%;
                }
                #mensagem {
                    width: 90%;
                }
            }
        }
    }
`
