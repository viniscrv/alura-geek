import iconeLupa from '../../assets/img/IconeLupa.svg'
import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    height: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pesquisar {
        display: flex;
        align-items: center;
        div {
            input {
                margin-left: 2em;
                border: none;
                border-radius: 10px;
                padding: .5em ;
                background-color: #F5F5F5;
                width: 300px;
                &[type='text'] {
                    background-image: url(${iconeLupa});
                    background-repeat: no-repeat;
                    background-position: 90% 50%;
                }
                &::placeholder {
                    position: absolute;
                    left: 20px;
                }
            }  
        }
    }
    .botaoLogin {
        button {
            padding: .5em 3em;
            background-color: #fff;
            color: var(--azul);
            border: 1px solid var(--azul);
        }
    }
    .lupa {
        display: none;
    }

    @media (max-width: 800px){
        .pesquisar {
            img {
                width: 160px;
            }      
            div {
                input {
                margin-left: 1em;
                padding: .5em 2em;
                    &[type='text'] {
                        background-image: url(${iconeLupa});
                        background-repeat: no-repeat;
                        background-position: 95% 50%;
                    }
                }   
            }  
        }
    }
    @media (max-width: 400px){
        justify-content: space-around;
        .pesquisar {
            img {
                width: 120px;
            }
            div {
                input {
                    display: none;
                }
            }
        }
        .lupa {
            display: block;
        }
    }
`