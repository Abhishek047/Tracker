import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IcnEx } from './components/IcnEx'   
import { Transaction } from './components/Transaction'   
import { AddTransaction } from './components/AddTransaction'   
import {GlobalProvider}  from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IcnEx />
      <Transaction />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
