import { DescricaoProduto } from "../../components/DescricaoProduto/DescricaoProduto";
import { Header } from "../../components/Header/Header";
import { Rodape } from "../../components/Rodape/Rodape";
import GlobalStyle from '../../styles/global';

function IdProduto() {
    return (
      <>
        <Header/>
        <DescricaoProduto/>
        <Rodape/>
        <GlobalStyle />
      </>
    )
  }
  
export default IdProduto