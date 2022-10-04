import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { Produtos } from "../../components/Produtos/Produtos";
import { Rodape } from "../../components/Rodape/Rodape";
import GlobalStyle from '../../styles/global';

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Produtos/>
      <Rodape/>
      <GlobalStyle />
    </>
  )
}

export default Home
