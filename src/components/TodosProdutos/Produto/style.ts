import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2em;
    div {
        position: relative;
        img[alt='Excluir'] {
            position: absolute;
            top: 10px;
            right: 40px;
            width: min-content;
            cursor: pointer;
        }
        img[alt='Editar'] {
            position: absolute;
            top: 10px;
            right: 5px;
            width: min-content;
            cursor: pointer;
        }
    }

    .preco {
        font-weight: 700;
    }
    @media (max-width: 768px){
        img {
            width: 164px;
        }
    }
`