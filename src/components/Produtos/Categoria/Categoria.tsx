import { Container } from "./style";
import produto01 from '../../../assets/img/produtosImg/unsplash_1VV1MRafd7A.png' 
import produto02 from '../../../assets/img/produtosImg/unsplash_4OHkK555s1A.png' 
import produto03 from '../../../assets/img/produtosImg/unsplash_6FDXGY9J6y4.png' 
import produto04 from '../../../assets/img/produtosImg/unsplash_epRFE_hBNjo.png' 
import produto05 from '../../../assets/img/produtosImg/unsplash_KeGToDVN0l4.png' 
import produto06 from '../../../assets/img/produtosImg/unsplash_R8L1l9RN198.png' 

export function Categoria(){
    return (
        <Container>
                <header>
                    <h2>Star Wars</h2>
                    <a href="">Ver tudo</a>
                </header>
                <div className="produtos">
                    <div>
                        <img src={produto01} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={produto02} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={produto03} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={produto04} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={produto05} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={produto06} alt="" />
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                </div>
            </Container>
    )

}