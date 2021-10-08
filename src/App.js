//import './App.css';
import React from "react";

function Food(props){
  return <h1>TEST {props.favorite}!!</h1>;
}

function renderFood(props){
  return (
    <Food 
  )
}

const foodList = ["Sugar","Candy","CottonCandy"];

function App() {
  return (
    <div className="App"> 
      <Food favorite="potato" />
      {foodList.map(function (favs){
        return (<Food favorite={favs} />);
      })}
    </div>
  );
}

export default App;
