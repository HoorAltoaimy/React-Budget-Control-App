// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import TargetForm from "./components/TargetForm";
import TransferForm from "./components/TransferForm";


const App = () =>{
  return (
    <div className='app'>
      <div className='title'>
        <h1>Budget Control App</h1>
      </div>
      
      <div className="form1">
        <IncomeForm />
        <ExpenseForm />
        <TargetForm />
        
      </div>
      <div className="form2">
        <TransferForm />
      </div>
    </div>
  )
} 

export default App;
