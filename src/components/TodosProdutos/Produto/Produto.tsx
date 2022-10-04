import starWars1 from '../../../assets/img/produtosImgStarWars/unsplash_1VV1MRafd7A.png' 
import { Container } from './style'


export function Produto(){
    return(
            <Container>
                <img src={starWars1} alt="" />
                <p className="titulo">Produto XYZ</p>
                <p className="preco">R$ 60,00</p>
                <p>#11111111</p>
            </Container>

    )

}