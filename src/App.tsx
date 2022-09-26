import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { Produtos } from "./components/Produtos/Produtos";
import GlobalStyle from './styles/global'

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Produtos/>
      <GlobalStyle />
    </div>
  )
}

export default App
