import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Cadastro from './components/pages/Cadastro'
import Aluno from './components/Listagem/Aluno'

import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import DetalheAluno from './components/Listagem/DetalheAluno'
function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Container customClass="minHeight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/aluno" element={<Aluno/>}/>
            <Route path="/aluno/:id" element={<DetalheAluno/>}/>
          </Routes>
        </Container>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
