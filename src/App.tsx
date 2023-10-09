// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import TargetForm from "./components/TargetForm";
import TransferForm from "./components/TransferForm";


const App = () =>{
  return (
    <div className="App">
      <IncomeForm />
      <ExpenseForm />
      <TargetForm />
      <TransferForm />
    </div>
  )
} 

export default App;
