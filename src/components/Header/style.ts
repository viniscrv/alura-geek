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
    .lupa {
        display: none;
    }

    @media (max-width: 768px){
        padding: 2em;
    }
    @media (max-width: 400px){
        padding: 1em;
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