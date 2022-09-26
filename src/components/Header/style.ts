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
                padding: .5em 4em;
                background-color: #F5F5F5;
                &[type='text'] {
                    background-image: url(${iconeLupa});
                    background-repeat: no-repeat;
                    background-position: 90% 50%;
                }
                &::placeholder {
                    position: absolute;
                    left: 30px;
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
`