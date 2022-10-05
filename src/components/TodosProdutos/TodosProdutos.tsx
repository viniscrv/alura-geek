import starWars1 from '../../assets/img/produtosImgStarWars/unsplash_1VV1MRafd7A.png' 
import starWars2 from '../../assets/img/produtosImgStarWars/unsplash_4OHkK555s1A.png' 
import starWars3 from '../../assets/img/produtosImgStarWars/unsplash_6FDXGY9J6y4.png' 
import starWars4 from '../../assets/img/produtosImgStarWars/unsplash_epRFE_hBNjo.png' 
import starWars5 from '../../assets/img/produtosImgStarWars/unsplash_KeGToDVN0l4.png' 
import starWars6 from '../../assets/img/produtosImgStarWars/unsplash_R8L1l9RN198.png' 
import console1 from '../../assets/img/produtosImgConsoles/unsplash_0POwK6iAiRQ.png'
import console2 from '../../assets/img/produtosImgConsoles/unsplash_caNzzoxls8Q.png'
import console3 from '../../assets/img/produtosImgConsoles/unsplash_k-xYhI3-gJM.png'
import console4 from '../../assets/img/produtosImgConsoles/unsplash_wa5z9o9fgjw.png'
import console5 from '../../assets/img/produtosImgConsoles/unsplash_Zjn4dT993-g.png'
import console6 from '../../assets/img/produtosImgConsoles/unsplash_ZV7lnfyQLmA.png'
import diversos1 from '../../assets/img/produtosImgDiversos/unsplash_bUgaIaZysH0.png'
import diversos2 from '../../assets/img/produtosImgDiversos/unsplash_fMP-oCze3AY.png'
import diversos3 from '../../assets/img/produtosImgDiversos/unsplash_jMT6BrgBuXU.png'
import diversos4 from '../../assets/img/produtosImgDiversos/unsplash_MxVkWPiJALs.png'
import diversos5 from '../../assets/img/produtosImgDiversos/unsplash_r27umXAelDc.png'
import diversos6 from '../../assets/img/produtosImgDiversos/unsplash_sYVY_ZKwaxU.png'


import { Produto } from './Produto/Produto';
import { Container } from "./style";
import { Link } from 'react-router-dom'

export function TodosProdutos(){
    return (
        <Container>
            <div className="topo">
                <h2>Todos os produtos</h2>
                <Link to='/NovoProduto'><button>Adicionar produto</button></Link>
            </div>
            <div className="produtos">
                <Produto imagem={starWars1} />
                <Produto imagem={starWars2} />
                <Produto imagem={starWars3} />
                <Produto imagem={starWars4} />
                <Produto imagem={starWars5} />
                <Produto imagem={starWars6} />
                <Produto imagem={console1} />
                <Produto imagem={console2} />
                <Produto imagem={console3} />
                <Produto imagem={console4} />
                <Produto imagem={console5} />
                <Produto imagem={console6} />
                <Produto imagem={diversos1} />
                <Produto imagem={diversos2} />
                <Produto imagem={diversos3} />
                <Produto imagem={diversos4} />
                <Produto imagem={diversos5} />
                <Produto imagem={diversos6} />
                </div>           
        </Container>

    )
}