import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Alliny"

  const newName = name.toLocaleUpperCase()
  
  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h2>Alterando o JSX!</h2>
      <p>Oá, {newName}</p>
      <p>Soma: {1 + 2}</p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );
}

export default App;
