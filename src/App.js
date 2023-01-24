import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {

  const nome = "Caleb"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Leonardo" />
      <SayMyName nome="Alliny" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Kariny"
        idade="25"
        profissao="Auxiliar Admnistrativo"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App;
