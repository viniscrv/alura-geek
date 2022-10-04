import { Container } from './style'

export function Produto(props:{imagem:string}){
    return(
        <Container>
            <img src={props.imagem} alt="" />
            <p className="titulo">Produto XYZ</p>
            <p className="preco">R$ 60,00</p>
            <p>#11111111</p>
        </Container>
    )
}