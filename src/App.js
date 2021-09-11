import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const cricketer = ["Sakib Al Hasan", "Mashrafi Murtaza", "Tamim iqbal","Shahriar ", "Shoyab Akter", "breat lee"];
  const products = [
    {name: "Photoshop", price:"$ 69.9"},
    {name: "Illustrator", price:"$ 49.9"},
    {name: "Microsoft", price:"$ 87.9"},
    {name: "Adobe Premier Pro", price:"$ 87.9"}
  ]
  const productNames = products.map(products => products.name);
  const cricketerNames = cricketer.map(cricketer => cricketer);
  
  console.log(cricketerNames);
  return (
    <div className="App">
      <header className="App-header">
        <h2>I am a React Developer</h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          cricketer.map(cricketer => <li>{cricketer}</li>)
          }
         
        </ul>
        {
          products.map(pd =><Product product={pd}></Product> )
        }
        
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        
        <Person name={cricketer[0]} job="Cricket"></Person>
        <Person name={cricketer[1]}job="Cricket"></Person>
        <Person name={cricketer[2]} job="Cricket"></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h2>Users Count: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);  
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor : "lightgray",
    color: "#393939",
    width: "250px",
    height: "250px",
    float: "left",
    margin: "10px"
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <button>Buy Now!</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:"3px solid cyan", width:"450px", margin:"20px", borderRadius: "3px"}}>
      <h2>Your name : {props.name}</h2>
      <p>Your Profession : {props.job}</p>
    </div>
  )
}

export default App;
