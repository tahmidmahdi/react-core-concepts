import React, { useEffect, useState } from 'react';
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
  const products = [
    {name:'photoshop', price: '$90.99'},
    {name: "Illustrator", price: '$69.99'},
    {name: 'PDF READER', price: "$6.99"},
    {name: 'Premier Pro', price: "$246.99"}
  ]
  const friends = [
    {name: 'Fahim', age: '25'},
    {name: 'Rahat', age: '25'},
    {name: 'Rakib', age: '26'},
    {name: 'Susmoy', age: '24'},
    {name: 'Limon', age: '24'},
    {name: 'Mehedi', age: '26'}
  ]
  const nayoks = ['Anwar', 'Jafor', 'Salman', 'Bappy', 'Shuvo', 'sakib'];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);

  const productNames = products.map(product => product.name);
  console.log(productNames);

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
        <Counter></Counter>
        <Users></Users>
        <p>My first React Paragraph</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        <h1 style = {style}>My Heading: {tech.name +' '+ tech.type}</h1>
        <h3 style={{backgroundColor: 'cyan', color:'yellow'}}>My Small Heading: {tech2.name + ' '+ tech2.type}</h3>
        <p style={{color: 'lightSalmon'}}>I am a REACT GUY</p>



        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product = {products[0]}></Product> */}
        {/* {console.log(products[0].name)}; */}
        
        



        {/* This is a component which is similar in look also data */}
        
        <Person name='Tahmid Alif - Al - Mahdi' hobby = 'coding'></Person>
        <Person name='Tahmid' hobby='coding and coding'></Person>  
        <Person name='Mahdi' hobby='coding and sleeping'></Person>
        <Coder name={name[0]} ></Coder>

        {
          friends.map(frnd => <FriendsUnit each={frnd}></FriendsUnit>)
        }

      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic User {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}



function Counter() {

  // state name, function to set value
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count-1)} >Decrease</button>
      <button onClick = {() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Person(props) {
  const personStyle ={
    border: '2px solid red',
    margin:'10px'
  };
 
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
  );
}

function Product(props) {
  console.log(props);
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    // margin: '20px',
    // padding: '20px',
    height: '300px',
    width: '300px',
    float : 'left'
    
  };
  const {name,price} = props.product;
  console.log(props)
 
  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}

function FriendsUnit(props) {
  const {name, age} = props.each;
  return(
    <div style = {{border:'2px solid grey', padding:'10px'}}>
      <h5>Name:  {name}</h5>
      <h6>Age: {age}</h6>
    </div>
  );
}

export default App;
