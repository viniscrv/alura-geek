import logoImg from '../../assets/img/Logo.svg'
import iconeLupa from '../../assets/img/Lupa.png'
import { Container } from './style'

export function Header(){
    return (
        <Container>
            <div className='pesquisar'>
                <img src={logoImg} alt="Logo" />
                <div>
                    <input type="text" placeholder='O que deseja encontrar?'/>
                </div>
            </div>
            <div className='botaoLogin'>
                <button>Login</button>
            </div>
            <img src={iconeLupa} className='lupa' alt="Lupa" />
        </Container>

    )
}