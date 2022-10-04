import { Produto } from './Produto/Produto';
import { Container } from "./style";

export function TodosProdutos(){
    return (
        <Container>
            <div className="topo">
                <h2>Todos os produtos</h2>
                <button>Adicionar produto</button>
            </div>
            <Produto />
        </Container>

    )
}