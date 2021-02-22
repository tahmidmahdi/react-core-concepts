import logo from './logo.svg';
import './App.css';

function App() {
  var tech = {
    name: 'react',
    type: 'app'
  }
  var tech2 = {
    name: 'vueJS',
    type :'app'
  }
  var style = {
    color: 'red',
    backgroundColor : 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My first React Paragraph</p>
        <h1 style = {style}>My Heading: {tech.name +' '+ tech.type}</h1>
        <h3>My Small Heading: {tech2.name + ' '+ tech2.type}</h3>
      </header>
    </div>
  );
}

export default App;
