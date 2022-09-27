import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Produtos } from "./components/Produtos/Produtos";
import { Rodape } from "./components/Rodape/Rodape";
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Produtos/>
      <Rodape/>
      <GlobalStyle />
    </div>
  )
}

export default App
