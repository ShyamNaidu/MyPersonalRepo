import { useState } from 'react';
import './App.css'
import pen from "./images/pen.jpg"

function Header({ name , year}){
  return(
    <header>
      <h2>I am learning React - {name} - {year}</h2>
    </header>
  )
}

const items = [
  "Idly",
  "Upma",
  "Dosa"
]

const dishObjects = items.map((dish,i) => ({
  id: i,
  title: dish
}));

function List({dishes}){
  return(
    <main>
      <img src={pen} alt='My Pen' />
    <ul>
      {dishes.map(dish => 
          (<li key={dish.id} style={{listStyleType: "none"}}>
              {dish.title}
            </li>))}
    </ul>
    </main>
  )
}




function App() {
  const [status, setStatus] = useState("Open");
  console.log(status);



  return (
  <div>
    <h1>The school is currently {status}</h1>
    <button onClick={() => setStatus("Closed")}>Close School</button>
    <Header name="Alex" year={new Date().getFullYear()} />
    <List dishes={dishObjects} />
  </div>
  );
}

export default App
