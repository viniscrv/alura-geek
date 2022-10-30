import { CadastroProduto } from '../../components/CadastroProduto/CadastroProduto';
import { Header } from '../../components/Header/Header';
import { Rodape } from '../../components/Rodape/Rodape';
import GlobalStyle from '../../styles/global';


function NovoProduto(){
    return (
        <>
            <Header/>
            <CadastroProduto/>
            <Rodape/>
            <GlobalStyle/>
        </>
    )
}

export default NovoProduto