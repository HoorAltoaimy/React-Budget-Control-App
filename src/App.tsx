import { useState } from "react";

import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import TargetForm from "./components/TargetForm";
import TransferForm from "./components/TransferForm";

const App = () => {
  //transfer for saving acc
  const [saving, setSaving] = useState(0);
  const getCurrentSaving = (amount: number) => {
    setSaving(amount);
  };

  const [incomeAmount, setIncomeAmount] = useState(0);
  const getIncome = (myIncome: number) => {
    setIncomeAmount(myIncome);
  };

  const [expenseAmount, setExpenseAmount] = useState(0);
  const getExpense = (myExpense: number) => {
    setExpenseAmount(myExpense);
  };
  const [savingAmount, setSavingAmount] = useState(0);
  const getSaving = (mySaving: number) => {
    setSavingAmount(mySaving);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Budget Control App</h1>
      </div>

      <div className="form1">
        <IncomeForm getIncome={getIncome} />
        <ExpenseForm getExpense={getExpense} />
        <TargetForm saving={saving} getSaving={getSaving} />
      </div>
      <div className="form2">
        <TransferForm
          getCurrentSaving={getCurrentSaving}
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
          savingAmount={savingAmount}
        />
      </div>
    </div>
  );
};

export default App;
