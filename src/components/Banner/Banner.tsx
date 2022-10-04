import { Link } from "react-router-dom";
import { Container } from "./style";

export function Banner(){
    return (
        <Container>
            <div>
                <h1>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <Link to='/Produtos'><button>Ver Consoles</button></Link>
            </div>
        </Container>
    )
}