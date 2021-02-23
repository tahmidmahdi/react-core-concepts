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

  const name = ['Tahmid', 'Alif', 'Mahdi'];
  const hobby = ['coding']
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
        
        <Person name='Tahmid Alif - Al - Mahdi' hobby = 'coding'></Person>
        <Person name='Tahmid' hobby='coding and coding'></Person>  
        <Person name='Mahdi' hobby='coding and sleeping'></Person>
        <Coder name={name[0]} ></Coder>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle ={
    border: '2px solid red',
    margin:'10px'
  };
  console.log(props);
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hobby: {props.hobby}</h3>
  </div>
  );
}

function Coder(props) {
  return (
    <div>
      <h3>Coder: {props.name}</h3>
      <p>Hobby: </p>
    </div>
  )
}

export default App;
