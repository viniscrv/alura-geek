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
    @media (max-width: 768px){
        padding: 1em;
        .produtos {
            width: 730px;
        }
    }
    @media (max-width: 400px){
        .topo {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 0;
            h2 {
                margin-bottom: 1em;
            }
        }
        .produtos {
            width: 350px;
        }
    }
`