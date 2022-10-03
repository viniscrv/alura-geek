import { Container } from "./style";

export function Sessao(){
    return (
        <Container>
            <div>
                <h3>Iniciar Sessão</h3>
                <input type="text" placeholder="Escreva seu email"/>
                <input type="password" placeholder="Escreva sua senha"/>
                <button>Entrar</button>
            </div>
        </Container>
    )
}