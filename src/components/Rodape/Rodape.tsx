import { Container } from "./style";
import logo from '../../assets/img/Logo.svg'

export function Rodape(){
    return (
        <Container>
            <div className="informacoes">
                <div><img src={logo} alt="" /></div>
                <div className="lista">
                    <ul>
                        <li><a href="#">Quem somos nós</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Programa fidelidade</a></li>
                        <li><a href="#">Nossas lojas</a></li>
                        <li><a href="#">Quero ser financiado</a></li>
                        <li><a href="#">Anuncie aqui</a></li>
                    </ul>
                </div>
                <div className="contato">
                    <h4>Fale conosco</h4>
                    <input type="text" id='nome' placeholder="Nome"/>
                    <textarea id='mensagem' placeholder="Deixe sua mensagem"></textarea>
                    <button>Enviar mensagem</button>
                </div>
            </div>
            <div className="desenvolvimento">
            Desenvolvido por Vinícius <br />2022
            </div>
        </Container>
    )
}