import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import Web3 from "web3"
import Routers from './Routers';

  const comp = () => {
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default comp;
