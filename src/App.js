import './App.css';
import React,{useState} from "react"
import Header from "./components/Header/Header"
import Filter from "./components/Filter/Filter"
import Shoes from "./components/Shoes/Shoes"
import Cart from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"

function App() {
  const [cart,setCart]=useState([]);
  return (
    <div className="App">
      {/* <Header/> */}
      <NavBar/>
      <div className="main-content">
         <Filter/>
         <Shoes cart={cart} setCart={setCart} />
         <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
