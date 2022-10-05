import { Container } from './style'
import iconeLixeira from '../../../assets/img/iconeLixeira.png'
import iconeLapis from '../../../assets/img/iconeLapis.png'

export function Produto(props:{imagem:string}){

    return(
        <Container>
            <div>
                <img src={props.imagem} alt="Produto" />
                <img src={iconeLixeira} alt="Excluir" />
                <img src={iconeLapis} alt="Editar" />
            </div>
            <p className="titulo">Produto XYZ</p>
            <p className="preco">R$ 60,00</p>
            <p>#11111111</p>
        </Container>
    )
}