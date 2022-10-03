import { Link } from 'react-router-dom'
import logoImg from '../../assets/img/Logo.svg'
import iconeLupa from '../../assets/img/Lupa.png'
import { Container } from './style'

export function Header(){
    return (
        <Container>
            <div className='pesquisar'>
                <Link to='/'>
                    <img src={logoImg} alt="Logo" />
                </Link>
                <div>
                    <input type="text" placeholder='O que deseja encontrar?'/>
                </div>
            </div>
            <div className='botaoLogin'>
                <Link to='/Login'>
                    <button>Login</button>
                </Link>
            </div>
            <img src={iconeLupa} className='lupa' alt="Lupa" />
        </Container>

    )
}