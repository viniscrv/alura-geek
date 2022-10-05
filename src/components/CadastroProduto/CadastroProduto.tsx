import { Container } from "./style";


export function CadastroProduto(){
    return(
        <Container>
            <div>
                <h2>Adicionar novo produto</h2>
                <input type="text" placeholder="URL da imagem"/>
                <input type="text" placeholder="Categoria"/>
                <input type="text" placeholder="Nome do produto"/>
                <input type="text" placeholder="Preço do produto"/>
                <textarea placeholder="Descrição do produto"></textarea>
                <button>Adicionar produto</button>
            </div>
        </Container>


    )
}