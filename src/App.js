import React from 'react';
import './App.css';
import Header from './Pages/Header';
import Trade from "./Pages/Trade"
import Tools from './Pages/Tools';
import Charts from './Pages/Charts';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { Route,Routes } from 'react-router-dom';

function getLibrary(provider) {
  return new Web3Provider(provider);
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Charts/>} />
          <Route exact path="/Trade" element={<Trade/>} />
          <Route exact path="/Tools" element={<Tools/>} />
        </Routes>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
