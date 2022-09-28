import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './Pages/Header';
import Trade from "./Pages/Trade"
import Tools from './Pages/Tools';
import Charts from './Pages/Charts';
import ad from './Pages/ad';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="app">
        <Header />
        <Route exact path="/" component={Charts} />
        <Route exact path="/Trade" component={Trade} />
        <Route exact path="/Tools" component={Tools} />
        <Route exact path="/ad" component={ad} />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
