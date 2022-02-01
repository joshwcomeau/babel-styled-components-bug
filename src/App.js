import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Thing>
          Edit <code>src/App.js</code> and save to reload.
        </Thing>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Thing = styled.div`
  color: red;
`;

export default App;
