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
        {/* <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>My first React Paragraph</p>
        <h1 style = {style}>My Heading: {tech.name +' '+ tech.type}</h1>
        <h3 style={{backgroundColor: 'cyan', color:'yellow'}}>My Small Heading: {tech2.name + ' '+ tech2.type}</h3>
        <p style={{color: 'lightSalmon'}}>I am a REACT GUY</p>



        {/* This is a component which is similar in look also data */}
        <Person></Person>
        <Person></Person>  
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  const personStyle ={
    border: '2px solid red',
    margin:'10px'
  };
  return (
  <div style={{border:'2px solid yellow',margin:'10px'}}>
    <h1>Name: Tahmid Alif - Al - Mahdi</h1>
    <h3>Hero Of the Year</h3>
  </div>
  );
}

export default App;
