import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = "Alliny"

  const newName = name.toLocaleUpperCase()
  
  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro app utilizando React :)</p>
    </div>
  );
}

export default App;
