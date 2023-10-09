// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import TargetForm from "./components/TargetForm";


const App = () =>{
  return (
    <div>
      <IncomeForm />
      <ExpenseForm />
      <TargetForm />
    </div>
  )
} 

export default App;
