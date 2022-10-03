import { Header } from "../../components/Header/Header"
import { Rodape } from "../../components/Rodape/Rodape"
import { Sessao } from "../../components/Sessao/Sessao";
import GlobalStyle from '../../styles/global';

function Login() {
    return (
      <>
        <Header/>
        <Sessao/>
        <Rodape/>
        <GlobalStyle />
      </>
    )
  }
  
  export default Login