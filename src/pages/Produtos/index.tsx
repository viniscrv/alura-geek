import { Header } from '../../components/Header/Header';
import { Rodape } from '../../components/Rodape/Rodape';
import { TodosProdutos } from '../../components/TodosProdutos/TodosProdutos';
import GlobalStyle from '../../styles/global';


function Produtos(){
    return (
        <>
            <Header />
            <TodosProdutos/>
            <Rodape />
            <GlobalStyle/>
        </>
    );
}

export default Produtos
