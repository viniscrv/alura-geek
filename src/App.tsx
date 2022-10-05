import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import NovoProduto from './pages/NovoProduto';
import Produtos from './pages/Produtos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Produtos" element={<Produtos/>}/>
        <Route path="/NovoProduto" element={<NovoProduto/>}/>
      </Routes>
    </Router>
  )
}

export default App
