//import logo from './logo.svg';
import witcher from './witcher.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={witcher} className="App-logo" alt="logo" />
        <p>
          Magic. It's place of power
        </p>
        <a
          className="App-link"
          href="https://www.gog.com/ru/game/the_witcher_3_wild_hunt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy witcher 3
        </a>
      </header >
    </div>
  );
}

export default App;
