import { Link } from "react-router-dom";
import { Container } from "./style";


export function Categoria(props: {categoria:string, produto1: string, produto2: string, produto3: string, produto4: string, produto5: string, produto6: string}){
    return (
        <Container>
                <header>
                    <h2>{props.categoria}</h2>
                    <Link to="/Produtos"><a href="">Ver tudo</a></Link>
                </header>
                <div className="produtos">
                    <div>
                        <img src={props.produto1} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={props.produto2} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={props.produto3} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={props.produto4} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={props.produto5} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                    <div>
                        <img src={props.produto6} alt=""/>
                        <p className="titulo">Produto XYZ</p>
                        <p className="preco">R$ 60,00</p>
                        <a href="#">Ver produto</a>
                    </div>
                </div>
            </Container>
    )

}