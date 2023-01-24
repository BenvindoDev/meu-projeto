import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {

  const nome = "Caleb"

  return (
    <div className="App">
      <SayMyName nome="Leonardo" />
      <SayMyName nome="Alliny" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Kariny"
        idade="25"
        profissao="Auxiliar Admnistrativo"
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;
