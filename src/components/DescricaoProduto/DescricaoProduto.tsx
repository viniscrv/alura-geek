import { Container } from "./style";
import produtoImage from '../../assets/img/produtosImgStarWars/produto_destaque.png'
import { Categoria } from "../Produtos/Categoria/Categoria";
import starWars1 from '../../assets/img/produtosImgStarWars/unsplash_1VV1MRafd7A.png' 
import starWars2 from '../../assets/img/produtosImgStarWars/unsplash_4OHkK555s1A.png' 
import starWars3 from '../../assets/img/produtosImgStarWars/unsplash_6FDXGY9J6y4.png' 
import starWars4 from '../../assets/img/produtosImgStarWars/unsplash_epRFE_hBNjo.png' 
import starWars5 from '../../assets/img/produtosImgStarWars/unsplash_KeGToDVN0l4.png' 
import starWars6 from '../../assets/img/produtosImgStarWars/unsplash_R8L1l9RN198.png' 

export function DescricaoProduto() {
  return (
    <Container>
        <div>
            <div className="produto-destaque">
                <img src={produtoImage} alt="" />
                <div>
                    <h1>Produto XYZ</h1>
                    <span>R$ 60,00</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem harum corporis mollitia sunt molestiae, dolore et in qui saepe enim ad voluptatibus minus quibusdam recusandae delectus nulla ea. Corrupti dolores neque nihil veritatis sit optio nesciunt magnam minima! Est amet odio magni quisquam, eos non accusantium modi numquam eveniet ex?</p>
                </div>
            </div>
        </div>
        <div className="produtos-similares">
            <Categoria
            categoria="Produtos similares"
            produto1={starWars1}
            produto2={starWars2}
            produto3={starWars3}
            produto4={starWars4}
            produto5={starWars5}
            produto6={starWars6}
            />
        </div>
    </Container>
  )
}
