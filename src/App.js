import React from 'react';
import './App.css';
import Header from './Header';
import {Route, Link} from "react-router-dom";
import Trade from "./Trade"
import Tools from './Tools';
import Charts from './Charts';
import ad from './ad';
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
